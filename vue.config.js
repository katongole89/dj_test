const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave:false,
  publicPath:"/vue/template/",
});
