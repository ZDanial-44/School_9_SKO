<script setup>
import { computed } from "vue";
import SampleTwo from '../components/SpThree.vue'

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const blocksData = [
  {
    titleLeft: {
      kz: "Мектеп директоры",
      ru: "Мектеп директоры"
    },
    imageLeft: "62fb5f10245.jpg",
    contentLeft: {
      kz: "Аленова Гульден Жаксылыковна",
      ru: "Аленова Гульден Жаксылыковна"
    },
    titleRight: {
      kz: "Мектеп директорының оқу ісі жөніндегі орынбасары",
      ru: "Мектеп директорының оқу ісі жөніндегі орынбасары"
    },
    imageRight: "IMG_20250723_2.jpg",
    contentRight: {
      kz: "Басыбаева Меруерт Ислямбековна",
      ru: "Басыбаева Меруерт Ислямбековна"
    }
  },{
    titleLeft: {
      kz: "Мектеп директорының оқу ісі жөніндегі орынбасары",
      ru: "Мектеп директорының оқу ісі жөніндегі орынбасары"
    },
    imageLeft: "62fb5f10245.jpg",
    contentLeft: {
      kz: "Пастухова Ирина Петровна",
      ru: "Пастухова Ирина Петровна"
    },
    titleRight: {
      kz: "Шұғыл қызмет телефондары",
      ru: "Телефоны экстренных служб"
    },
    imageRight: "IMG_20250723_2.jpg",
    contentRight: {
      kz: "Мектеп директорының тәрбие ісі жөніндегі орынбасары",
      ru: "Солопова Татьяна Викторовна"
    }
  },{
    titleLeft: {
      kz: "Солопова Татьяна Викторовна",
      ru: "Солопова Татьяна Викторовна"
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
      {{ lang === 'kz' ? 'Әкімшілік' : 'Администрация' }}
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
  margin-top: 12%;
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
