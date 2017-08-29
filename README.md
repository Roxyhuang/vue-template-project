# vue-template-project

> A Vue project for Neo

## Build Setup

###install dependencies

```bash
npm install
```

###config your vhost
```bash
vi /etc/hosts
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
127.0.0.1       local.neo.com
255.255.255.255 broadcasthost
::1             localhost
```
###serve with hot reload at localhost:4000
```bash
npm run dev
```
###build for production with minification
```
npm run build
```

###folder structure
```markdown
---vue-template-project # project description
    |
    |---build/ ---|---build.js # build entry
    |             |---check-version.js # check npm and node version
    |             |---dev-client.js # dev-client config
    |             |---dev-server.js # dev entry
    |             |---webpack.base.conf.js #
    |             |---webpack.dev.conf.js
    |             |---webpack.prod.conf.js
    |             |
    |---config/ --|---dev.env.js
    |             |---index.js
    |             |---pro.env.js
    |
    |---dist/ #build file
    |
    |---src/-- |---assets/     # for module assets
    |          |---backend/---|mixin/ # for backend mixins
    |          |              |---Backend.js # for client entry
    |          |              |---Client.js  # product client
    |          |---components/|---include/ # normal components ps. other components is smart components
    |          |---global/----|---client_config/ # for client config
    |          |              |---css_module/    # for global scss module
    |          |---page/------|---activity/      # for activity folder, you can create vue in this folder
    |          |              |---webview/       # for webview folder, you can create webview in this folder
    |          |---router/----| # if you need global router you can config this file
    |          |---utils/-----|---Console.js
    |          |              |---ErrorHander.js
    |          |              |---Exception.js   
    |---static/ # for global assets
    |
    |---.babelrc # for babel config
    |---editorconfig
    |---eslintignore
    |---.eslintrc.js # for eslint config
    |---.gitignore
    |---index.html # spa container page
    |---package.json
    |---README.md


```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
