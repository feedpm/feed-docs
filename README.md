![pipeline status](https://github.com/feedpm/docs/feed-docs/workflows/deploy.yml/badge.svg)

# feed-docs

[feed-docs](https://feedpm.github.io/feed-docs/) is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Prerequisite

Make sure you do not have very old versions of Node and Yarn. Please reinstall them if they are very old.

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

**Note that sometimes the changes to `.md` files may not be reflected, depending on your case.** You will have to restart the server again.

### Precommit checks

The project uses `lint-staged` and `husky` to make sure the changes would not break on auto deployments. These two steps are executed (before commiting) every time you commit:

1. `prettier` will format all files with proper intendation
1. `jest` will run unit test to make sure all the configurations are in order.

Since these steps are done before commit and can fail, the commit itself can fail. If this hapeens, understand the error messages, fix the errors, then git add, and finally commit again.

You can ignore these check by commiting like this:

```
$ git commit -m "the commit message" --no-verify
```

**Note that they will be tested again during auto deployment.** So the skip will be only useful during intermediate commits, before the final push.
