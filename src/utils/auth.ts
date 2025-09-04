// 认证相关的工具函数

// 检查用户是否已登录
export const isAuthenticated = (): boolean => {
  return localStorage.getItem('isLoggedIn') === 'true'
}

// 获取当前登录用户名
export const getCurrentUser = (): string | null => {
  return localStorage.getItem('username')
}

// 设置登录状态
export const setLoginStatus = (username: string): void => {
  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('username', username)
}

// 清除登录状态
export const clearLoginStatus = (): void => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('username')
}

// 检查登录状态并重定向
export const checkAuthAndRedirect = (router: any): void => {
  if (!isAuthenticated()) {
    router.push('/')
  }
}
