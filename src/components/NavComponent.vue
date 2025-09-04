<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRouter} from "vue-router";
import SunMoon from "./SunMoon.vue";
import { getCurrentUser, clearLoginStatus } from '../utils/auth';

const nav_search = ref({
  input3: '',
})

const router = useRouter()
const username = ref('')

onMounted(() => {
  // 获取当前登录用户信息
  username.value = getCurrentUser() || '';
})

/*   点击跳转  */
const doMenuClick = (path?: string) => {
  router.push({
    path: path
  })
}

// 处理退出登录
const handleLogout = () => {
  clearLoginStatus();
  router.push('/');
}

// 主题状态管理
const isDarkTheme = ref(false);

// 处理主题切换
const handleThemeChange = (status: boolean) => {
  isDarkTheme.value = status;
  // 更新 body 的 class
  if (isDarkTheme.value) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
};
</script>
<template>
  <!--  导航  -->
  <div id="NavComposition" :class="{ 'dark-theme': isDarkTheme }" style="border: 1px solid red">
    <!--导航左侧-->
    <div class="nav_left" style="border: 1px solid red">
      <!--   首页 -->
      <el-dropdown>
        <el-button style="border: none; background-color: transparent;"
                   @click="doMenuClick('/home')"> 首页
        </el-button>

      </el-dropdown>
      <!--    视界-->
      <el-dropdown placement="bottom">
        <el-button @click="doMenuClick('/visions/vision')">视界</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="doMenuClick('/visions/vision/movie')">电影/电视剧</el-dropdown-item>
            <el-dropdown-item @click="doMenuClick('/visions/vision/cartoon')">动漫/动画</el-dropdown-item>
            <el-dropdown-item @click="doMenuClick('/visions/vision/doc')">纪录片/综艺</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--    集智-->
      <el-dropdown placement="bottom">
        <el-button @click="doMenuClick('/wisdoms/wisdom')"> 集智</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="doMenuClick('/wisdoms/wisdom/note')">学习笔记</el-dropdown-item>
            <el-dropdown-item @click="doMenuClick('/wisdoms/wisdom/book')">书籍</el-dropdown-item>
            <el-dropdown-item @click="doMenuClick('/wisdoms/wisdom/project')">项目合集</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--    航迹-->
      <el-dropdown placement="bottom">
        <el-button @click="doMenuClick('/track/track')"> 航迹</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="doMenuClick('/track/track/album')">相册合集
            </el-dropdown-item>
            <el-dropdown-item @click="doMenuClick('/track/track/map_completion')">点亮地图
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--      工具箱-->
      <el-dropdown placement="bottom-end">
        <el-button @click="doMenuClick('/tools')"> 工具箱</el-button>
      </el-dropdown>
      <!--      关于-->
      <el-dropdown placement="bottom-end">
        <el-button @click="doMenuClick('/about')"> 关于</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="doMenuClick('/about/milestones')">开发里程碑</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <!--    导航右侧-->
    <div class="nav_right" style="border: 1px solid purple">
      <!--      搜索框-->
      <div class="search_input">
        <el-input
            v-model="nav_search.input3"
            style="max-width: 600px"
            placeholder="请输入内容..."
            class="input-with-select"
        >
          <template #append>
            <img src="../assets/search.png" alt="搜索框"
                 style="width: 20px; height: 20px;"/>
          </template>
        </el-input>

        <!--     系统主题切换  -->
        <div>
          <SunMoon @onStatus="handleThemeChange"/>
        </div>

        <!-- 用户信息和退出登录 -->
        <div class="user-info">
          <span class="welcome-text">欢迎，{{ username }}</span>
          <el-button type="danger" size="small" @click="handleLogout">退出登录</el-button>
        </div>

      </div>

    </div>

  </div>
</template>
<style>
/* 导航左侧  */
#NavComposition {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.nav_left {
  width: auto;
  justify-content: space-between; /* 均匀分布 */
  align-items: center; /* 垂直居中 */
  padding: 15px 20px; /* 左右内边距 */
  margin-left: 100px;
}

.el-dropdown .el-button {
  width: 100%;
  margin: 0;
  border: none;
  background-color: transparent;
}

/*  导航右侧  */
.nav_right {
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

/*  搜索框  */
.search_input {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 60px;
}

/* 用户信息样式 */
.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.welcome-text {
  font-size: 14px;
  color: #333;
}

/* 深色主题样式  */
.dark-theme {
  background-color: #202020 !important;
  color: #ffffff;
}

.dark-theme .nav_left .el-button {
  color: #ffffff !important;
  background-color: transparent;
}

.dark-theme .nav_right {
  background-color: #202020;
}

.dark-theme .el-input {
  background-color: #202020;
}

.dark-theme .el-input__inner {
  background-color: #202020;
  color: #ffffff;
  border-color: #555555;
}

.dark-theme .el-input__wrapper {
  background-color: #202020;
  border-color: #555555;
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

.dark-theme .welcome-text {
  color: #ffffff;
}
</style>