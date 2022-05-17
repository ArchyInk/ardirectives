<!--
 * @author: Archy
 * @Date: 2022-05-13 09:40:22
 * @LastEditors: Archy
 * @LastEditTime: 2022-05-17 11:27:26
 * @FilePath: \ardirectives\examples\components\download.vue
 * @description: 
-->
<script setup lang="ts">
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
    下载
  </div>
</template>

