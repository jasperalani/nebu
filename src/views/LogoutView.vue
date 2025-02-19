<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { NCard, NSpace, NButton, NImage, NResult, useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const message = useMessage()

const handleLogout = async () => {
  try {
    // Assuming you have a logout method in your UserStore
    await userStore.logout()
    message.success('Successfully logged out')
    router.push('/login') // Redirect to login page
  } catch (error) {
    message.error('Failed to logout. Please try again.')
  }
}

const handleCancel = () => {
  router.back() // Go back to previous page
}
</script>

<template>
  <div class="logout-container">
    <NCard class="logout-card">
      <NSpace vertical align="center" size="large">
        <!-- Logo/Image section -->
        <NImage width="120" src="/path-to-your-logo.png" preview-disabled />

        <NResult
          status="warning"
          title="Logout Confirmation"
          description="Are you sure you want to log out?"
        >
          <template #footer>
            <NSpace justify="center" align="center">
              <NButton @click="handleCancel" size="large" ghost> Cancel</NButton>

              <NButton @click="handleLogout" size="large" type="warning"> Logout</NButton>
            </NSpace>
          </template>
        </NResult>
      </NSpace>
    </NCard>
  </div>
</template>

<style scoped>
.logout-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

.logout-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}
</style>
