<template>
  <div class="home-container">
    <n-layout>
      <n-layout-header>
        <n-menu mode="horizontal" :options="menuOptions" />
      </n-layout-header>

      <n-layout-content>
        <div class="content">
          <h1 class="title">Nebu</h1>
        </div>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutContent } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/',
        },
        { default: () => 'Home' },
      ),
    key: 'home',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/login',
        },
        { default: () => 'Login' },
      ),
    key: 'login',
  },
]
</script>

<style scoped>
.home-container {
  width: 100%;
  min-height: 100vh;
}

.content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
}
</style>