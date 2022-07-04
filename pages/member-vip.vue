<script lang="ts" setup>
import { deleteMockData, getMockData, postMockData, putMockData } from '~/server/api/mock'
</script>

<template>
  <div>
    <button @click="putMockData()">
      Post
    </button>
    <button @click="postMockData()">
      Put
    </button>
    <button @click="getMockData()">
      Get
    </button>
    <button @click="deleteMockData()">
      Delete
    </button>
  </div>
</template>

<style lang="less">
</style>
