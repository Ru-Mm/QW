<script setup lang="ts">
// 航迹主视图
</script>

<template>
  <div class="voyage-traces-container">
    <h1>航迹</h1>
    <div class="voyage-traces-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.voyage-traces-container {
  padding: 20px;
}

.voyage-traces-content {
  margin-top: 20px;
}
</style>