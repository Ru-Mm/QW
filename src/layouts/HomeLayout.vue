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

</style>