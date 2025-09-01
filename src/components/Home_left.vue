<script setup lang="ts">
// 尝试从 public 目录加载图片
const pfpImage = 'public/images/avaters/pfp.jpg';
</script>

<template>
  <div id="Home_Left">
    <!--    头像  -->
    <el-avatar :size="150" :src="pfpImage"/>
  </div>
</template>

<style>
#Home_Left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-avatar {
  margin-top: 80px;
  transition: all 0.3s ease;
}

/* 深色主题样式 - 统一背景色 #202020 */
.dark-theme #Home_Left {
  background-color: #202020;
  color: #ffffff;
}

.dark-theme .el-avatar {
  background-color: #202020;
}
</style>