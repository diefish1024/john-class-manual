# John Class Survival Guide

> 上海交通大学 John 班生存指北 — 由历届同学共同维护的非官方文档站。

[![Build & Deploy](https://github.com/your-org/john-class-manual/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-org/john-class-manual/actions/workflows/deploy.yml)
[![MkDocs Material](https://img.shields.io/badge/docs-MkDocs%20Material-blue)](https://squidfunk.github.io/mkdocs-material/)

---

## 目录

- [本地开发](#本地开发)
- [生产部署](#生产部署)
  - [无鉴权（公开展示）模式](#无鉴权公开展示模式)
  - [鉴权（jAccount SSO）模式](#鉴权jaccount-sso模式)
- [GitHub Actions 自动部署](#github-actions-自动部署)
- [贡献内容](#贡献内容)
- [技术栈](#技术栈)

---

## 本地开发

### 1. 创建并激活 conda 环境

```bash
conda create -n mkdoc python=3.10 -y
conda activate mkdoc
```

### 2. 安装依赖

```bash
pip install mkdocs-material jieba mkdocs-minify-plugin
```

### 3. 启动本地预览服务器

```bash
mkdocs serve
# 浏览器访问 http://127.0.0.1:8000
# 修改 docs/ 下的任意文件后页面自动刷新
```

### 4. 构建静态文件（可选验证）

```bash
mkdocs build
# 输出到 site/ 目录
```

---

## 生产部署

部署基于 Docker Compose。通过 **Docker Profiles** 控制是否开启 jAccount 登录鉴权，两种模式共用同一份 `docker-compose.yml`，无需改动代码。

### 前提条件

- 服务器已安装 Docker Engine 和 Docker Compose Plugin（v2）
- 已在服务器上克隆本仓库至 `/opt/john-guide/`
- 已通过 `mkdocs build` 或 CI/CD 将 `site/` 目录同步到服务器

---

### 无鉴权（公开展示）模式

直接对外开放，任何人无需登录即可访问。适合对外展示或内网使用。

```bash
# 在服务器的仓库目录下执行
docker compose up -d
```

站点将在服务器 **80 端口**提供服务。

> **如需关闭鉴权而不重建镜像：**
> 编辑 `nginx/nginx.conf`，将所有标注 `# [AUTH]` 的行注释掉（约 13 行），
> 然后 `docker compose exec nginx nginx -s reload` 热重载即可。

---

### 鉴权（jAccount SSO）模式

通过 oauth2-proxy 接入交大 jAccount OIDC，只有白名单邮箱才能访问。

#### 第一步：申请 jAccount OIDC 应用

在 [交大 jAccount 开发者平台](https://developer.sjtu.edu.cn) 注册应用，获取：
- `Client ID`
- `Client Secret`
- 填写回调地址：`http://<你的域名>/oauth2/callback`

#### 第二步：生成 Cookie 密钥

```bash
python -c "import secrets, base64; print(base64.b64encode(secrets.token_bytes(32)).decode())"
```

#### 第三步：配置环境变量

```bash
cp .env.example .env
# 编辑 .env，填入真实值：
#   OIDC_ISSUER_URL=https://jaccount.sjtu.edu.cn/oauth2/
#   OAUTH2_CLIENT_ID=<你的 Client ID>
#   OAUTH2_CLIENT_SECRET=<你的 Client Secret>
#   OAUTH2_COOKIE_SECRET=<上一步生成的随机字符串>
```

#### 第四步：配置访问白名单

编辑 `whitelist.txt`，每行填写一个允许访问的 jAccount 邮箱：

```
zhangsan@sjtu.edu.cn
lisi@sjtu.edu.cn
```

#### 第五步：启动（带鉴权）

```bash
docker compose --profile auth up -d
```

此时 Nginx 会将所有请求先发送给 oauth2-proxy 鉴权，未登录用户将被重定向到 jAccount 登录页。

#### 运维操作

```bash
# 查看运行状态
docker compose --profile auth ps

# 查看 Nginx 日志
docker compose logs -f nginx

# 查看 oauth2-proxy 日志
docker compose --profile auth logs -f oauth2-proxy

# 热重载 Nginx（更新配置后）
docker compose exec nginx nginx -s reload

# 停止所有服务
docker compose --profile auth down
```

---

## GitHub Actions 自动部署

每次推送代码到 `main` 分支时，CI/CD 流水线会自动：

1. 安装 Python 依赖
2. 执行 `mkdocs build` 构建静态站点
3. 通过 `rsync` + SSH 将 `site/` 同步到服务器

### 配置所需 Secrets

在 GitHub 仓库页面进入 **Settings → Secrets and variables → Actions**，添加以下三个 Secret：

| Secret 名称 | 说明 |
|------------|------|
| `SERVER_SSH_KEY` | 部署用 SSH **私钥**内容（对应服务器 `~/.ssh/authorized_keys` 中的公钥） |
| `SERVER_USER` | 服务器登录用户名（如 `ubuntu`、`deploy`） |
| `SERVER_IP` | 服务器公网 IP 地址 |

### 生成部署密钥对

```bash
# 本地生成专用密钥对（不要使用个人 SSH 密钥）
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/john_guide_deploy -N ""

# 将公钥追加到服务器
ssh-copy-id -i ~/.ssh/john_guide_deploy.pub <SERVER_USER>@<SERVER_IP>

# 将私钥内容填入 GitHub Secret SERVER_SSH_KEY
cat ~/.ssh/john_guide_deploy
```

### 确保服务器目录存在

```bash
# 在服务器上执行一次
sudo mkdir -p /opt/john-guide/site
sudo chown <SERVER_USER>:<SERVER_USER> /opt/john-guide
```

---

## 贡献内容

1. Fork 本仓库
2. 在 `docs/` 对应目录下新建或修改 Markdown 文件
3. 本地运行 `mkdocs serve` 预览效果
4. 提交 Pull Request，简要说明修改内容

详见 [贡献指南](docs/about/contributing.md)。

---

## 技术栈

| 组件 | 版本 | 用途 |
|------|------|------|
| [MkDocs](https://www.mkdocs.org/) | latest | 静态文档生成器 |
| [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) | latest | 主题与 UI 组件 |
| [jieba](https://github.com/fxsjy/jieba) | latest | 中文搜索分词 |
| [Nginx](https://nginx.org/) | 1.27-alpine | 静态文件服务器 & 反向代理 |
| [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/) | v7.7.1 | OIDC/jAccount 鉴权网关 |
| [GitHub Actions](https://github.com/features/actions) | — | CI/CD 自动构建部署 |
