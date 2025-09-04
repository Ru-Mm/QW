<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBackToLogin = () => {
  router.push('/')
}
</script>

<template>
  <div class="register-container">
    <div class="register-box">
      <div class="register-header">
        <h2>用户注册</h2>
        <p>注册功能开发中...</p>
      </div>
      
      <div class="register-form">
        <el-button type="primary" @click="goBackToLogin" style="width: 100%">
          返回登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.register-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.register-header {
  text-align: center;
  margin-bottom: 30px;
}

.register-header h2 {
  color: #333;
  margin: 0 0 10px 0;
  font-size: 28px;
  font-weight: 600;
}

.register-header p {
  text-align: center;
  color: #999999;
  margin: 0;
  font-size: 14px;
}

.register-form {
  margin-top: 20px;
}

/* 深色主题适配 */
.dark-theme .register-box {
  background: #202020;
  color: #ffffff;
}

.dark-theme .register-header h2 {
  color: #ffffff;
}

.dark-theme .register-header p {
  color: #cccccc;
}
</style>