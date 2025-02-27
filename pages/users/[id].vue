<script setup lang="ts">
// 获取路由的参数
const route = useRoute()
console.log(route.params.id)
</script>

<template>
<div>
  id 参数为：{{route.params.id}}
</div>
</template>

<style scoped lang="scss">

</style>