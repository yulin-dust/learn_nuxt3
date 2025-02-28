<script setup lang="ts">
definePageMeta({  // 引用自定义的中间件
  // middleware: 'my' // 单个
  middleware: ['my', 'my2'] // 多个
})

</script>

<template>
  <p>
    user page
  </p>
</template>

<style scoped lang="scss">

</style>