<template>
  <div id="qiankunContainer"></div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  import { start } from 'qiankun'

  onMounted(() => {
    if (!(window as any).qiankunStarted) {
      ;(window as any).qiankunStarted = true
      start()
    }
  })
</script>

<style scoped></style>
