<template>
  <div class="about-container">
    <h1>关于</h1>
    <div class="about-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
// 关于主视图
</script>

<style scoped>
.about-container {
  padding: 20px;
}

.about-content {
  margin-top: 20px;
}
</style>
