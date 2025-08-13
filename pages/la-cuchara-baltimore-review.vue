<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// This page redirects to the blog post for direct access
await navigateTo('/blog/la-cuchara-baltimore-review', { redirectCode: 301 });
</script>