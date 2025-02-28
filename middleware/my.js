// to: 去哪儿，from: 从哪儿来
export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to.path, from.path, "my middleware")

    if (to.path === '/user') {
        // return navigateTo("/login")


        // - 问题：直接访问路由，中间件的 navigateTo 会执行第一个，但是不会执行第二个
        // - 从页面点击，会执行第二个，不会执行第一个.............

        navigateTo("/login")    // 不会跳转
        return true
    }
})
