<template>
  <el-container>
    <el-header>
      <h1 class="logo">
        <router-link to="/">
          <el-image :src="Logo" />
        </router-link>
      </h1>
      <div class="navbar">
        <el-menu
          :default-active="menuActive"
          :ellipsis="false"
          router
          mode="horizontal"
        >
          <template v-for="item in routes" :key="item.name">
            <el-sub-menu v-if="item.childs" :index="item.name">
              <el-menu-item v-for="val in item.childs" :index="val.name">
                {{ val.title }}
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="item.name">
              {{ item.title }}
            </el-menu-item>
          </template>
        </el-menu>
        <el-link
          :underline="false"
          href="https://github.com/MrKAries/MrKAries"
          target="_blank"
        >
          <IconSvgGitHub />
        </el-link>
        <div
          :class="{ 'karies-hamburger': true, active: menuVisible }"
          @click="() => (menuVisible = !menuVisible)"
        >
          <span
            v-for="item in [...new Array(3)]"
            :key="item"
            class="karies-hamburger-item"
          ></span>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view class="karier-container"></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  import IconSvgGitHub from '~icons/bi/github.svg'
  import Logo from './assets/logo.png'

  export interface RouteBaseType {
    name: string
    title: string
  }
  export interface RouteItemType extends RouteBaseType {
    childs?: Array<RouteBaseType>
  }

  const menuActive = ref<string>()

  const menuVisible = ref<boolean>(false)

  const routes = ref<Array<RouteItemType>>([{ name: 'note', title: '笔记' }])

  const route = useRoute()

  /**
   * route 作为响应式对象其任何属性都可以被监听
   * 避免监听整个 route 对象
   */
  watch(
    () => route.name,
    name => {
      menuActive.value = name as string
    },
  )
</script>

<style lang="less">
  body,
  h1 {
    margin: 0;
  }
  #karies {
    min-width: 320px;
    min-height: 100vh;
    .el-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--el-border-color);
      .el-image {
        height: 100%;
      }
      .navbar {
        display: flex;
        align-items: center;
        .el-menu {
          --el-menu-hover-text-color: var(--el-menu-active-color);
          --el-menu-hover-bg-color: transparent;
          display: none;
          border-bottom: none;
          &-item {
            transform: translateY(1px);
          }
          @media screen and (min-width: 768px) {
            display: flex;
          }
        }
        .el-link {
          --el-link-font-size: var(--el-font-size-large);
          --el-link-hover-text-color: var(--el-link-text-color);
          padding: 0 20px;
        }
        .karies-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 20px;
          height: 100%;
          cursor: pointer;
          &.active .karies-hamburger-item {
            &:nth-child(1) {
              // transform-origin: bottom;
              transform: rotate(45deg) translate(13px);
            }
            &:nth-child(2) {
              // transform-origin: top;
              transform: rotate(-45deg);
            }
            &:nth-child(3) {
              // transform-origin: bottom;
              transform: translate(1.5px, -8px) rotate(45deg);
            }
          }
          &-item {
            margin: 2px 0;
            height: 2px;
            background-color: #000;
            border-radius: 10px;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:first-child {
              width: 50%;
            }
            &:last-child {
              width: 75%;
            }
          }
          @media screen and (min-width: 768px) {
            display: none;
          }
        }
      }
      @media screen and (min-width: 960px) {
        padding: 0 32px;
      }
    }
    .el-main {
      --el-main-padding: 0;
    }
  }
</style>
