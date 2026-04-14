# John Class Survival Guide

> Survival guide for John Class at Shanghai Jiao Tong University, maintained by students.

[![Build & Deploy](https://github.com/diefish1024/john-class-manual/actions/workflows/deploy.yml/badge.svg)](https://github.com/diefish1024/john-class-manual/actions/workflows/deploy.yml)

---

## Local Development

```bash
conda create -n mkdoc python=3.10 -y
conda activate mkdoc
pip install mkdocs-material jieba mkdocs-minify-plugin
mkdocs serve
```

Open http://127.0.0.1:8000.

## Deployment

This site is hosted on GitHub Pages and deployed automatically on every push to `main`.

To set it up in a new repository: go to **Settings → Pages → Source** and select **GitHub Actions**.

> For self-hosted deployment with Nginx + jAccount SSO, see the [`self-hosted`](https://github.com/diefish/john-class-manual/tree/self-hosted) branch.

## Contributing

1. Fork the repository
2. Edit or add Markdown files under `docs/`
3. Open a Pull Request

See [贡献指南](docs/about/contributing.md) for writing conventions.
