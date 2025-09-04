<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { setLoginStatus } from '../utils/auth'

const router = useRouter()
const username = ref('admin')
const password = ref('123456')
const loading = ref(false)

const handleLogin = async () => {
  if (!username.value || !password.value) {
    ElMessage.warning('请输入用户名和密码')
    return
  }
  
  loading.value = true
  
  try {
    // 模拟登录验证
    if (username.value === 'admin' && password.value === '123456') {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // 使用认证工具设置登录状态
      setLoginStatus(username.value)
      
      ElMessage.success('登录成功')
      
      // 跳转到主页
      router.push('/home')
    } else {
      ElMessage.error('用户名或密码错误')
    }
  } catch (error) {
    ElMessage.error('登录失败，请重试')
  } finally {
    loading.value = false
  }
}

const doRegisterClick = (path?: string) => {
  router.push({
    path: path
  })
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <el-button @click="doRegisterClick('/register')" style="position: absolute; top: 10px; right: 10px;">注册</el-button>
      <div class="login-header">
        <h2>用户登录</h2>
        <p>测试账号：admin / 123456</p>
      </div>
      
      <div class="login-form">
        <el-form>
          <el-form-item>
            <el-input
              v-model="username"
              placeholder="请输入用户名"
              prefix-icon="User"
              size="large"
            />
          </el-form-item>
          
          <el-form-item>
            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              prefix-icon="Lock"
              size="large"
              show-password
              @keyup.enter="handleLogin"
            />
          </el-form-item>
          
          <el-form-item>
            <el-button
              type="primary"
              size="large"
              :loading="loading"
              @click="handleLogin"
              style="width: 100%"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 400px;
  position: relative;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h2 {
  color: #333;
  margin: 0 0 10px 0;
  font-size: 28px;
  font-weight: 600;
}

.login-header p {
  text-align: center;
  color: #999999;
  margin: 0;
  font-size: 14px;
}

.login-form {
  margin-top: 20px;
}

.el-form-item {
  margin-bottom: 20px;
}

/* 深色主题适配 */
.dark-theme .login-box {
  background: #202020;
  color: #ffffff;
}

.dark-theme .login-header h2 {
  color: #ffffff;
}

.dark-theme .login-header p {
  color: #cccccc;
}
</style>