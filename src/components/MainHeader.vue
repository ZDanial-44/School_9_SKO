<script setup>
import langData from '../locales/header.json'
import { useRoute } from 'vue-router'
defineProps({ lang: String })

const route = useRoute()
</script>
<template>
  
  <header class="header">
    <div class="left">
      <RouterLink to="/" class="news-link">
        <img src="../assets/images/logo.png" alt="Логотип" class="logo" />
      </RouterLink>
      <div class="school-info">
        <h1>{{ langData.schoolName[lang] }}</h1>
        <h1>{{ langData.schoolType[lang] }}</h1>
      </div>
    </div>
    <div class="right">
      <span class="home-text">
        {{ route.meta?.title?.[lang] || (lang === 'kz' ? 'Басты бет' : 'Главная') }}
      </span>
      <button class="burger-btn" @click="$emit('toggleSidebar')">
        <span></span> <span></span> <span></span>
      </button>
      <div class="lang-switcher">
        <button @click="$emit('changeLang', 'kz')" :class="{ active: lang === 'kz' }">KAZ</button>
        <button @click="$emit('changeLang', 'ru')" :class="{ active: lang === 'ru' }">RUS</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed; top: 0; left: 0; right: 0;
  min-height: 80px;
  height: 11%;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.left {
  display: flex;
  align-items: center;
  height: 100px; /* равна .header */
  margin: auto;
}

.logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 12px;
}

.school-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; /* равна .header */
}

.school-info h1 {
  font-size: 18px;
  margin: 0;
}

.school-info p {
  font-size: 14px;
  margin: 0;
}

.right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-switcher button {
  background: transparent;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 6px 10px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.lang-switcher button.active,
.lang-switcher button:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
}
.home-text {
  font-weight: bold;
  width: 160px;
}

.burger-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px; height: 18px;
  cursor: pointer; background: none; border: none; padding: 0;
}

.burger-btn span {
  display: block;
  height: 3px;
  background-color: var(--color-white);
  border-radius: 2px;
}
</style>
