<script setup lang="ts">

import NavComponent from "../components/NavComponent.vue";
import Home_left from "../components/Home_left.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!--      左侧区域  -->
      <el-aside width="300px">
        <Home_left/>
      </el-aside>
      <el-container>
        <!--    头部区域-->
        <el-header>
          <NavComponent/>
        </el-header>
        <!--    中间区域-->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--    底部区域-->
        <el-footer>开发时间:2025.8.16</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style >
.common-layout {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

/* 确保el-container也占满整个空间 */
.el-container {
  height: 100%;
}

.el-header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.el-aside {
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
}

.el-main {
  background-color: #ffffff;
}

.el-footer {
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
  padding: 20px;
}

/* 深色主题样式 - 统一背景色 #202020 */
.dark-theme {
  background-color: #202020 !important;
  color: #ffffff;
}

.dark-theme .el-header {
  background-color: #202020 !important;
  border-bottom: 1px solid #404040;
  color: #ffffff;
}

.dark-theme .el-aside {
  background-color: #202020 !important;
  border-right: 1px solid #404040;
  color: #ffffff;
}

.dark-theme .el-main {
  background-color: #202020 !important;
  color: #ffffff;
}

.dark-theme .el-footer {
  background-color: #202020 !important;
  border-top: 1px solid #404040;
  color: #ffffff;
}

/* 全局深色主题样式 */
body.dark-theme {
  background-color: #202020;
  color: #ffffff;
}

/* Element Plus 组件深色主题适配 - 统一背景色 #202020 */
.dark-theme .el-button {
  background-color: #202020;
  border-color: #555555;
  color: #ffffff;
}

.dark-theme .el-button:hover {
  background-color: #555555;
  border-color: #666666;
}

.dark-theme .el-button:focus {
  background-color: #202020;
  border-color: #666666;
}

.dark-theme .el-input {
  background-color: #202020;
}

.dark-theme .el-input__wrapper {
  background-color: #202020;
  border-color: #555555;
}

.dark-theme .el-input__inner {
  background-color: #202020;
  color: #ffffff;
}

.dark-theme .el-input__inner::placeholder {
  color: #999999;
}

.dark-theme .el-dropdown-menu {
  background-color: #202020;
  border-color: #555555;
}

.dark-theme .el-dropdown-item {
  color: #ffffff;
}

.dark-theme .el-dropdown-item:hover {
  background-color: #555555;
}

.dark-theme .el-avatar {
  background-color: #202020;
}

/* 导航组件深色主题 */
.dark-theme #NavComposition {
  background-color: #202020;
}

.dark-theme .nav_left {
  background-color: #202020;
}

.dark-theme .nav_right {
  background-color: #202020;
}

/* 左侧头像区域深色主题 */
.dark-theme #Home_Left {
  background-color: #202020;
}
</style>