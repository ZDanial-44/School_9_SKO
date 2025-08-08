<script setup>
import SampleOne from '../../components/SampleOne.vue'
defineProps({ lang: String })
</script>

<template>
  <div>
    <SampleOne :lang="lang" />
  </div>
</template>