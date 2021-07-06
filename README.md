# shopify-app-development-boilerplate

This repository provides boilerplate for Shopify theme development with the default theme.

## Requirements

- [nodenv](https://github.com/nodenv/nodenv#installation)
- [yarn](https://classic.yarnpkg.com/en/docs/install)
- [rbenv](https://github.com/rbenv/rbenv#installation)
- [bundler](https://github.com/rubygems/bundler)

## Setup

### Installation

```bash
bundle install
yarn install
```

### Login to your shopify account

```bash
yarn run login
```

### Start server

```
yarn run serve
```

### Install the app on your Shopify store

See the log to find message like below to access the url after the server has successfully started.

```
⭑ To install and start using your app, open this URL in your browser:
https://abcdef123456.ngrok.io/auth?shop=test.myshopify.com
```

### Reference

https://shopify.dev/apps/getting-started
