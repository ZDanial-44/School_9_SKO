<script setup>
// import sampleOne from './components/sampleOne.vue'
// import Home from './views/Home.vue'
// import { RouterView } from 'vue-router'

import { ref } from 'vue'
import Header from './components/MainHeader.vue'  
import SideBar from './components/SideBar.vue'

const lang = ref('kz')
const setLang = (newLang) => {
  lang.value = newLang
}
const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <Header :lang="lang" @changeLang="setLang" @toggleSidebar="toggleSidebar"/>
    <div class="header-spacer"></div> <!--вроде не обязательно но если убрать все рухнет-->
  <SideBar :lang="lang" v-show="sidebarOpen"/>
  
  <router-view v-slot="{ Component }">
    <component :is="Component" :lang="lang" />
  </router-view>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-color: var(--color-bg);
}

.header-spacer {
  height: 11%; /* высота Header-а */
}
</style>
