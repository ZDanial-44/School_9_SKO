<template>
  <div class="page">
    <SampleOne
      v-for="(block, idx) in blocks"
      :key="idx"
      :lang="lang"
      :to="block.to"
      :titleLeft="block.titleLeft"
      :contentLeft="block.contentLeft"
    />
    <SampleOneImage 
      class="central-main-content"
      :lang="lang"
      :imageSrc="logoImage"
    />
  </div>
</template>

<style scoped>
.page {
  margin-top: 11%;
}
</style>

<script setup>
import { computed } from 'vue'
import SampleOne from '../components/SpOne.vue'
import SampleOneImage from '../components/SpOneImage.vue'
import logoImage from '../assets/images/62fb5f10245.jpg'

const props = defineProps({
  lang: {
    type: String,
    default: 'kz',
  },
})

const blocksData = [
  {
    to: {
      kz: '/news/ministerstvo-daryn-kz',
      ru: '/news/ministerstvo-daryn-ru',
    },
    titleLeft: {
      kz: '«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.',
      ru: 'Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности.',
    },
    contentLeft: {
      kz: '788',
      ru: '980678',
    },
  },
  {
    to: {
      kz: '/news/ministerstvo-daryn-kz',
      ru: '/news/ministerstvo-daryn-ru',
    },
    titleLeft: {
      kz: '«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.',
      ru: 'Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности.',
    },
    contentLeft: {
      kz: '788',
      ru: '980678',
    },
  },
  {
    to: {
      kz: '/news/ministerstvo-daryn-kz',
      ru: '/news/ministerstvo-daryn-ru',
    },
    titleLeft: {
      kz: '«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.',
      ru: 'Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности.',
    },
    contentLeft: {
      kz: '788',
      ru: '980678',
    },
  },
  {
    to: {
      kz: '/news/ministerstvo-daryn-kz',
      ru: '/news/ministerstvo-daryn-ru',
    },
    titleLeft: {
      kz: '«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.',
      ru: 'Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности.',
    },
    contentLeft: {
      kz: '788',
      ru: '980678',
    },
  },
  {
    to: {
      kz: '/news/ministerstvo-daryn-kz',
      ru: '/news/ministerstvo-daryn-ru',
    },
    titleLeft: {
      kz: '«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.',
      ru: 'Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности.',
    },
    contentLeft: {
      kz: '788',
      ru: '980678',
    },
  }
]

const blocks = computed(() =>
  blocksData.map(b => ({
    to: b.to[props.lang],
    titleLeft: b.titleLeft[props.lang],
    contentLeft: b.contentLeft[props.lang],
  }))
)
</script>
