<template>
  <div id="qiankunContainer"></div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  // qiankun
  import { registerMicroApps, start } from 'qiankun'

  registerMicroApps([
    {
      name: 'karies-note',
      entry: '//localhost:7521/note',
      container: '#qiankunContainer',
      activeRule: '/note',
    },
  ])

  onMounted(() => {
    if (!(window as any).qiankunStarted) {
      ;(window as any).qiankunStarted = true
      start()
    }
  })
</script>