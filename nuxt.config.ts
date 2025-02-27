// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // css 引用与 vite 引用的css 不可以是同一个文件
  css: ["@/assets/css/base.scss"], // 引用css, 只是初始化样式

  vite: { // vite配置, 引入自定义的 css 变量
    css: {
      preprocessorOptions: {
        scss: {
            additionalData: `@use "~/assets/css/vitecss.scss" as *;`
        }
      }
    }
  },

  modules: [
    '@element-plus/nuxt'
  ],

  // 运行时的全局变量
  runtimeConfig:{
    count: 1, // 仅可以在服务端获取

    public: { // 可以在客户端获取，也可以在服务端获取
       baseUrl: "http://localhost:8080"
    }
  }
})
