<script setup lang="ts">
import { googleSdkLoaded } from 'vue3-google-login'
import { useUserStore } from '@/stores/UserStore'
import { storeToRefs } from 'pinia'
import { NCard, NSpace, NButton, NImage, NH1, NGradientText } from 'naive-ui'

// Composables
const userStore = useUserStore()
const { clientId } = storeToRefs(userStore)
const { fetchUserDataFrom } = userStore

// Methods
const signInWithGoogle = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: clientId.value,
        scope: 'email profile openid',
        redirect_uri: import.meta.env.PUBLIC_OAUTH_REDIRECT_URL,
        callback: (response) => {
          if (response.code) fetchUserDataFrom(response.code)
        },
      })
      .requestCode()
  })
}
</script>

<template>
  <div class="login-container">
    <NCard class="login-card">
      <NSpace vertical align="center" size="large">
        <!-- Logo/Image section -->
        <NImage width="120" src="/path-to-your-logo.png" preview-disabled />

        <!-- Welcome Text -->
        <NH1>
          <NGradientText
            :gradient="{
              from: '#7B66FF',
              to: '#00B8A9',
            }"
          >
            Welcome to Nebu
          </NGradientText>
        </NH1>

        <!-- Google Sign In Button -->
        <NButton @click="signInWithGoogle" size="large" class="google-btn">
          <template #icon>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              class="google-icon"
            />
          </template>
          Continue with Google
        </NButton>
      </NSpace>
    </NCard>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}

.google-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

.google-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>