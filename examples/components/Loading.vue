<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(true)
</script>

<template>
  <div v-loading="visible" :style="{ width: '100px', height: '100px', background: 'black' }">test</div>
</template>

