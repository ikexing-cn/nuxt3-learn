<script lang="ts" setup>
import { deleteMockDataFetch, getMockDataFetch, postMockDataFetch, putMockDataFetch } from '~/api/fetchMock'
import { deleteMockData, getMockData, postMockData, putMockData } from '~/api/mock'
</script>

<template>
  <div>
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

    <div>
      <button @click="getMockDataFetch()">
        Fetch Get
      </button>
      <button @click="postMockDataFetch()">
        Fetch Post
      </button>
      <button @click="putMockDataFetch()">
        Fetch Put
      </button>
      <button @click="deleteMockDataFetch()">
        Fetch Delete
      </button>
    </div>
  </div>
</template>

<style lang="less">
</style>
