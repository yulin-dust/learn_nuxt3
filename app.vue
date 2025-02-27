<script setup>
 if (import.meta.server){
    console.log('server')
 }else{
    console.log('client')
 }
</script>

<template>
  <header>
    头部
    <ul>
    <li>
      <nuxt-link to="/">首页</nuxt-link>

    </li>
    <li>
      <nuxt-link to="/user">用户</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about1/about1/about1">关于</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/login">登录</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/users">所有的用户编辑</nuxt-link>
    </li>
    </ul>

  </header>
  <main>
   <NuxtPage />
  </main>
  <footer>
    底部
  </footer>
</template>

<style scoped lang="scss">
  header, footer{
    border: 1px solid green;
  }
</style>
