<script setup>
import { ref } from "vue";

const name = ref("aaa") // 定义响应式变量 name，使用 ref 使其可以动态的检测变量的值的变化.....
// const data = useFetch("/api/hello")

const { data, status, error } = useFetch("/api/hello");

console.log(data,11)

setTimeout(() => {
  name.value = "bbb"
}, 2000)  // 2秒后修改 name 的值，属于客户端渲染。。。，因为页面已经打开，内容已经请求了。

console.log(name.value) // 输出 aaa , 在浏览器的控制台中可以看到输出的值。客户端渲染的值只可以在浏览器的控制台中看到
                        // 前面带 ssr 的为 服务端渲染的值，ide 的为服务端渲染的值
                        // 定时修改了也不会再次打印，因为这个值是响应式的，只有在页面中使用了才会触发更新
const test = () => {
  console.log("test")
}


</script>

<template>
  <div>
    {{ name }}

    <button @click="test">测试客户端渲染</button>
    <p>因为页面已经请求了，所以不会有 ssr ，及服务端的打印</p>
    <br>
    <!-- 显示加载状态 -->
    <p v-if="status === 'pending'">加载中...</p>
    <p v-else-if="error">加载失败: {{ error.message }}</p>
    <p v-else>{{ data?.message }}</p>
  </div>
</template>
