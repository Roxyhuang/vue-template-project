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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
