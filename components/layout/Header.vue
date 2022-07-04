<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <a-layout-header>
    <div class="logo" />
    <a-menu
      :selected-keys="[route.path]"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="/">
        <router-link to="/">
          首页
        </router-link>
      </a-menu-item>
      <a-menu-item key="/course-list">
        <router-link to="course-list">
          课程中心
        </router-link>
      </a-menu-item>
      <a-menu-item key="/member-vip">
        <router-link to="member-vip">
          超级会员
        </router-link>
      </a-menu-item>
      <a-menu-item key="/tool">
        <router-link to="tool">
          工具
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<style lang="less">
</style>
