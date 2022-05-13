<script setup lang="ts">
defineProps<{ msg: string }>()
const beforeDownload = ()=>{
  console.log('开始下载');
}
const downloaded = ()=>{
  console.log('下载完了');
}
</script>

<template>
  <div v-download="
    {
      url: 'https://portrait.gitee.com/uploads/avatars/user/2694/8083832_archyInk_1647334458.png!avatar200',
      filename: 'test',
      onBeforeDownload: beforeDownload,
      onDownloaded: downloaded,
    }
  " target="_blank">
    Vite Docs
  </div>
</template>

