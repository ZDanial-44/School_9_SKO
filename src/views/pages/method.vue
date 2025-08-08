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
    <SampleOneImage class="central-main-content" :lang="lang" :imageSrc="MainImage" />
  </div>
</template>

<style>
.page {
  margin-top: 11%;
}
</style>

<script setup>
import { computed } from "vue";
import SampleOne from "../../components/SpOne.vue";
import SampleOneImage from "../../components/SpOneImage.vue";
import MainImage from "../../assets/images/62fb5f10245.jpg";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const blocksData = [
  {
    to: {
      kz: "https://online.zakon.kz/Document/?doc_id=31376056&pos=7;-118#pos=7;-118",
      ru: "https://online.zakon.kz/Document/?doc_id=31376056&pos=7;-118#pos=7;-118",
    },
    titleLeft: {
      kz: "«Сабақта оқушылардың функционалдық сауаттылығын қалыптастыру» тақырыбындағы вебинар",
      ru: "Вебинар на тему «Формирование функциональной грамотности учащихся на уроках»",
    },
  },
  {
    to: {
      kz: "https://adilet.zan.kz/rus/docs/V2000019982",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz: "2024-2025 оқу жылындағы 5-11 сынып оқушыларынның аралық және қорытынды аттестаттау кестесі.",
      ru: "График промежуточной и итоговой аттестации обучающихся 5-11 классов за 2024-2025 учебный год.",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "ҰБТ тестілерін апробациядан өткізуге қатысу",
      ru: "Что нужно знать PISA-2025?",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "Білім туралы құжаттардың түрлерін, білім туралы мемлекеттік үлгідегі құжаттардың нысандарын және оларды есепке алу мен беру қағидаларын, білім туралы өзіндік үлгідегі құжаттардың мазмұнына қойылатын негізгі талаптарды және оларды есепке алу мен беру қағидаларын, сондай-ақ білім беру ұйымдарында білім алуды аяқтамаған адамдарға берілетін анықтаманың нысанын бекіту туралы",
      ru: "Правила выдачи документов об образовании государственного образца",
    },
  },
  {
    to: {
      kz: "/news/ministerstvo-daryn-kz",
      ru: "/news/ministerstvo-daryn-ru",
    },
    titleLeft: {
      kz:
        "ООЖБ дейінгі уақыт бұрын",
      ru:
        "Правила оказания государственной услуги «Прием документов для организации индивидуального бесплатного обучения на дому детей, которые по состоянию здоровья в течение длительного времени не могут посещать организации начального, основного среднего, общего среднего образования»",
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
      ru:
        "Правила обучения в форме экстерната и оказания государственной услуги «Выдача разрешения на обучение в форме экстерната в организациях основного среднего, общего среднего образования»",
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
      ru:
        "Правила и условия проведения аттестации педагогов, занимающих должности в организациях образования, реализующих общеобразовательные учебные программы дошкольного воспитания и обучения, начального, основного среднего и общего среднего образования, образовательные программы технического и профессионального, послесреднего, дополнительного, специализированного и специального образования, и иных гражданских служащих в области образования и науки",
    },
  },
];

const blocks = computed(() =>
  blocksData.map((b) => ({
    to: b.to[props.lang],
    titleLeft: b.titleLeft[props.lang],
  }))
);
</script>
