<script setup>
import SampleOne from '../components/SpOne.vue'
defineProps({ lang: String })
</script>

<template>
  <div>
    <SampleOne :lang="lang" />
  </div>
</template>