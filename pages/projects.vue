<script setup>
useHead({
  title: 'Home',
  meta: [{ 'http-equiv': 'refresh', content: '0;url=/' }]
})

onMounted(() => {
  navigateTo('/')
})
</script>

<template>
  <div></div>
</template>
