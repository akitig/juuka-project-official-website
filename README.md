# juuka-project-official-website

獣化プロジェクト公式サイトのリポジトリです。

## ブランチ

- `main`: 本番環境 `https://juuka-project.com/`
- `dev`: 開発環境 `https://work.akitiger.com/work/ju-pro/`

## デプロイ

`main` または `dev` にpushすると、GitHub Actionsにより自動でビルド・デプロイされます。

## 開発

```bash
npm install
npm run dev
```

## 静的ビルド

本番用:

```bash
npm run build
```

開発環境用:

```bash
DEPLOY_TARGET=dev npm run build
```