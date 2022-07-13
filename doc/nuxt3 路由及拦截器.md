# nuxt3 路由及拦截器

1. 静态路由，<br>
在`pages`内的所有vue页面都将会自动转换为对应的路由，如下所示：

```
nuxt3-app
├─ pages
  ├─ index.vue // http://localhost:3000
  ├─ page1.vue // http://localhost:3000/page1
  └─ page2.vue // http://localhost:3000/page2
```
↑ pages下的三个`.vue`文件都将转换为对应的路由

---
2. 动态路由:<br>
在nuxt3中，你只需要将动态参数写在[]中即可，如果需要有固定名称，则需要使用`-`隔开，如下所示：
```
├─ pages
  ├ user-[id]
  ├  └─ [name].vue // http://localhost:3000/user-:id/:name
  └─ index.vue // http://localhost:3000
```
---
3. 嵌套路由，<br>
与其类似，在pages下创建路由文件时将其以文件夹包裹时，对应文件夹内的vue文件则为嵌套路由，如下所示：
```
├─ pages
  ├ user
  ├  ├─ page1.vue // http://localhost:3000/user/page1
  ├  └─ page2.vue // http://localhost:3000/user/page2
  ├─ user.vue // http://localhost:3000/user
  └─ index.vue // http://localhost:3000
```
---
4. 路由跳转,<br>
nuxt3中使用`<NuxtLink>`进行跳转， 等同于`vue-router`的`<RouterLink>`
---
4. 路由渲染，<br>
在`vue-router`中我们使用`<RouterView>`来将路由渲染出来，而在nuxt3中则新的语义别名`<NuxtPage>`进行渲染。<br>
而嵌套路由的的渲染，也是用`<RouterView>`来当渲染容器，但是在vue3中也定义一个新的语义别名`<NuxtChild>`替换
```html
<!-- 两个子路由页面 -->
<template>
  <h1>page1</h1>
</template>

<template>
  <h1>page2</h1>
</template>

<!-- 父路由页面 -->
<template>
  <div>
    <NuxtLink to="/user/page1">page1</NuxtLink> <br>
    <NuxtLink to="/user/page2">page2</NuxtLink>
    <h1>user</h1>
    <NuxtChild />
  </div>
</template>

<!-- 主路由页面 -->
<template>
  <div>
    <NuxtLink to="/user">go to user</NuxtLink>
    <NuxtPage />
  </div>
</template>
```
---
5.路由拦截器，特殊操作
- 第一步： 在`plugins`文件夹里创建一个新的ts文件
- 第二步： 导出`defineNuxtPlugin`，标识这是一个插件
```ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // todo....
})
```
- 最后： 将所需的拦截器写入到nuxtApp中的$router里
```ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router as Router // 类型断言

  router.beforeEach((to, from, next) => {
    console.log('router interceptor before')
    next()
  })

  router.afterEach(() => {
    console.log('router interceptor after')
  })
})
```
- 其他`vue-router`相关的API都可在此实现