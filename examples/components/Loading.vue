<!--
 * @author: Archy
 * @Date: 2022-05-17 11:23:53
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-18 10:42:23
 * @FilePath: \ardirectives\examples\components\loading.vue
 * @description: 
-->
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(true)
</script>

<template>
  <div v-loading="{ visible: true }"
    :style="{ width: '100px', height: '100px', background: 'black' }">
    test
  </div>
</template>

