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
    <SampleOneImage class="central-main-content" :lang="lang" :imageSrc="logoImage" />
  </div>
</template>

<style scoped>
.page {
  margin-top: 11%;
}
</style>

<script setup>
import { computed } from "vue";
import SampleOne from "../../components/SpOne.vue";
import SampleOneImage from "../../components/SpOneImage.vue";
import logoImage from "../../assets/images/toka.jpg";

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
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»",
    },
    contentLeft: {
      kz: "2024 жылғы 02 қыркүйек",
      ru: "2024 жылғы 02 қыркүйек",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»",
    },
    contentLeft: {
      kz: "2024 жылғы 02 қыркүйек",
      ru: "2024 жылғы 02 қыркүйек",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»",
    },
    contentLeft: {
      kz: "2024 жылғы 02 қыркүйек",
      ru: "2024 жылғы 02 қыркүйек",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»",
    },
    contentLeft: {
      kz: "2024 жылғы 02 қыркүйек",
      ru: "2024 жылғы 02 қыркүйек",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»",
    },
    contentLeft: {
      kz: "2024 жылғы 02 қыркүйек",
      ru: "2024 жылғы 02 қыркүйек",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»",
    },
    contentLeft: {
      kz: "2024 жылғы 02 қыркүйек",
      ru: "2024 жылғы 02 қыркүйек",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Қазақстан Республикасының Мәдениет және ақпарат министрлігі «Дарын» мемлекеттік жастар сыйлығына байқау жариялайды",
      ru: "Министерство культуры и информации РК объявляет конкурс на премию «Дарын»",
    },
    contentLeft: {
      kz: "2024 жылғы 02 қыркүйек",
      ru: "2024 жылғы 02 қыркүйек",
    },
  },
];

const blocks = computed(() =>
  blocksData.map((b) => ({
    to: b.to[props.lang],
    titleLeft: b.titleLeft[props.lang],
    contentLeft: b.contentLeft[props.lang],
  }))
);
</script>
