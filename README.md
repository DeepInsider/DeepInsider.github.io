# DeepInsider.github.io

Deep Insider の GitHub リポジトリを紹介するサイトです。

## ライブラリの更新

`vendor/` 配下の jQuery と Bootstrap は、`package.json` に書かれた版を `node_modules` からコピーしたものです。
版を変えるときは `package.json` を更新してから、次のコマンドを実行します。

```
npm install
npm run vendor
```

`vendor/vue/vue.min.js`（Vue.js v0.11.0）は npm では管理していません。
ローカルで確認するときは、任意の静的サーバー（例: `npx http-server`）でこのフォルダーを公開してください。
