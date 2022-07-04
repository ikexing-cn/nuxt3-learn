<script lang="ts" setup>
</script>

<template>
  <a-layout id="layout">
    <layout-header />
    <a-layout-content id="content">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <slot />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less">
#layout {
  height: 100%;

  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  #content {
    margin: 10px 20px;
    height: 100%;
  }
}
</style>
