<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from "vue-router";

const nav_search = ref({
      input3: '',
    })

const router = useRouter()

/*   点击跳转  */
const doMenuClick = (path?: string) => {
  router.push({
    path: path
  })
}
</script>
<template>
  <!--  导航  -->
  <div id="NavComposition">
    <!--导航左侧-->
    <div class="nav_left">
      <!--   首页 -->
      <el-dropdown @click="doMenuClick('/')">
        <el-button style="border: none; background-color: transparent;"
        > 首页
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
            <el-dropdown-item @click="doMenuClick('/wisdoms/wisdom/book')">读书/书籍笔记</el-dropdown-item>
            <el-dropdown-item @click="doMenuClick('/wisdoms/wisdom/project')">项目合集</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--    航迹-->
      <el-dropdown placement="bottom">
        <el-button @click="doMenuClick('/voyage_Traces/voyage_Traces')"> 航迹</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="doMenuClick('/voyage_Traces/voyage_Traces/photo_collection')">相册合集</el-dropdown-item>
            <el-dropdown-item @click="doMenuClick('/voyage_Traces/voyage_Traces/map_completion')">点亮地图</el-dropdown-item>
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
            <el-dropdown-item @click="doMenuClick('/about/our_journey')">开发里程碑</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <!--    导航右侧-->
    <div class="nav_right">
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

      </div>

    </div>

  </div>
</template>
<style>
/* 导航左侧  */
#NavComposition {
  display: flex;
}

.nav_left {
  width: 600px;
  justify-content: space-between; /* 均匀分布 */
  align-items: center; /* 垂直居中 */
  padding: 15px 20px; /* 左右内边距 */
  margin-left: 340px;
}

.el-button {
  border: none;
  border-radius: 7px;
  font-size: 19px;
  flex: 1;
  margin: 0 5px;
}

/* 确保下拉菜单按钮样式一致 */
.el-dropdown {
  flex: 1;
  max-width: 100px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
}

.el-dropdown .el-button {
  width: 100%;
  margin: 0;
  border: none;
  background-color: transparent;
}

/* 移除下拉菜单的边框和背景 */
.el-dropdown-menu {
  border: none;
  background-color: transparent;
}

.el-dropdown-item {
  border: none;
  background-color: transparent;
}

/*  导航右侧  */
.nav_right {
  max-width: 400px;
  margin: auto;
}

.search_input {
  padding: 15px 20px;
}


</style>