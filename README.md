# quiet-internet-api

[![npm version](https://badge.fury.io/js/quiet-internet-api.svg)](https://badge.fury.io/js/quiet-internet-api)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

しずかなインターネットのAPIラッパー

## Overview

- しずかなインターネットのAPIをNode.js環境から利用しやすくするためのAPIラッパーライブラリです。

## Notes

- 参照系APIへのアクセスはスポンサー特典です。([詳細](https://sizu.me/sponsors/purchase))

## Installation

You can install this library using npm:

```shell
npm install quiet-internet-api
```

## Usage

```javascript
import { QuietInternetApi } from "quiet-internet-api";

const api = new QuietInternetApi("{ API_KEY }");

// Retrieve posts
const posts = await api.getPosts();
console.log(posts);

// Retrieve a specific post
const post = await api.getPost("{ slug }");
console.log(post);
```

## Link

- [しずかなインターネット](https://sizu.me/home)
- [APIドキュメント](https://github.com/catnose99/quiet-internet-api-docs)
- [APIリファレンス](https://catnose99.github.io/quiet-internet-api-docs/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
