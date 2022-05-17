<!--
 * @author: Archy
 * @Date: 2022-05-13 09:40:22
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-17 11:27:05
 * @FilePath: \ardirectives\examples\App.vue
 * @description: 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Download from './components/Download.vue'
import Loading from './components/Loading.vue'
</script>

<template>
  download:
  <Download msg="Hello Vue 3 + TypeScript + Vite" />
  loading:
  <Loading></Loading>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
