<script setup>
import { computed } from "vue";
import SampleTwo from '../components/SpTwo.vue'

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const blocksData = [
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru"
    },
    titleLeft: {
      kz: "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»"
    },
    imageLeft: "62fb5f10245.jpg",
    contentLeft: {
      kz: "«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.",
      ru: "Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности."
    },
    titleRight: {
      kz: "Шұғыл қызмет телефондары",
      ru: "Телефоны экстренных служб"
    },
    imageRight: "IMG_20250723_2.jpg",
    contentRight: {
      kz: "101 – Өртке қарсы қызмет\n102 – Полиция\n103 – Жедел медициналық көмек",
      ru: "101 – Пожарная служба\n102 – Полиция\n103 – Скорая медицинская помощь"
    }
  },{
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru"
    },
    titleLeft: {
      kz: "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»"
    },
    imageLeft: "62fb5f10245.jpg",
    contentLeft: {
      kz: "«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.",
      ru: "Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности."
    },
    titleRight: {
      kz: "Шұғыл қызмет телефондары",
      ru: "Телефоны экстренных служб"
    },
    imageRight: "IMG_20250723_2.jpg",
    contentRight: {
      kz: "101 – Өртке қарсы қызмет\n102 – Полиция\n103 – Жедел медициналық көмек",
      ru: "101 – Пожарная служба\n102 – Полиция\n103 – Скорая медицинская помощь"
    }
  },{
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru"
    },
    titleLeft: {
      kz: "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»"
    },
    imageLeft: "62fb5f10245.jpg",
    contentLeft: {
      kz: "«Дарын» мемлекеттік жастар сыйлығы – ғылым, шығармашылық, қоғамдық қызмет салаларында үздік жетістіктерге қол жеткізген жас таланттарды қолдау мақсатында тағайындалады.",
      ru: "Государственная молодежная премия «Дарын» присуждается за выдающиеся достижения в науке, творчестве и общественной деятельности."
    },
    titleRight: {
      kz: "Шұғыл қызмет телефондары",
      ru: "Телефоны экстренных служб"
    },
    imageRight: "IMG_20250723_2.jpg",
    contentRight: {
      kz: "101 – Өртке қарсы қызмет\n102 – Полиция\n103 – Жедел медициналық көмек",
      ru: "101 – Пожарная служба\n102 – Полиция \n 103 – Скорая медицинская помощь"
    }
  },
];

const blocks = computed(() =>
  blocksData.map((b) => ({
    to: b.to[props.lang],
    titleLeft: b.titleLeft[props.lang],
    imageLeft: b.imageLeft,
    contentLeft: b.contentLeft[props.lang],
    titleRight: b.titleRight[props.lang],
    imageRight: b.imageRight,
    contentRight: b.contentRight[props.lang],
  }))
);
</script>

<template>
  <div class="header-spacer">
    <h1 class="main-title">
      {{ lang === 'kz' ? 'Жаңалықтар' : 'Новости' }}
    </h1>
  </div> <!--вроде не обязательно но если убрать все рухнет-->
  <div class="page">
    <SampleTwo
      v-for="(block, idx) in blocks"
      :key="idx"
      :to="block.to"
      :titleLeft="block.titleLeft"
      :imageLeft="block.imageLeft"
      :contentLeft="block.contentLeft"
      :titleRight="block.titleRight"
      :imageRight="block.imageRight"
      :contentRight="block.contentRight"
    />
  </div>
</template>

<style scoped>
.header-spacer {
  margin-top: 9%;
  margin-bottom: 1.5%;
}

.main-title {
  margin-left: -68%;
  color: var(--color-bg);
  display: inline;
  background-color: var(--color-accent);
  border-radius: 0px 40px 0px 40px;
  padding: 10px 20px;
}

.page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}
</style>
