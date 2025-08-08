<template>
  <div class="news-block two-columns">
    <div class="left-column">
      <div class="news-block__column">
        <div class="news-block__header__korobka">
          <div class="news-block__header-text">
            <RouterLink :to="to" class="news-block__header">
              {{ titleLeft }}
            </RouterLink>
          </div>
          <div class="news-block__content">
            <div class="news-block__image__korobka" v-if="imageLeftSrc">
              <RouterLink :to="to" class="news-block__image-wrapper">
                <img :src="imageLeftSrc" :alt="titleLeft" class="news-block__image" />
              </RouterLink>
            </div>
            <span class="content-text" v-if="contentLeft">
              <slot name="left">
                <h3>
                  {{ contentLeft }}
                </h3>
              </slot>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="right-column">
      <div class="news-block__column">
        <div class="news-block__header__korobka">
          <div class="news-block__header-text">
            <RouterLink :to="to" class="news-block__header">
              {{ titleRight }}
            </RouterLink>
          </div>
          <div class="news-block__content">
            <div class="news-block__image__korobka" v-if="imageRightSrc">
              <RouterLink :to="to" class="news-block__image-wrapper">
                <img :src="imageRightSrc" :alt="titleRight" class="news-block__image" />
              </RouterLink>
            </div>
            <span class="content-text" v-if="contentRight">
              <slot name="right">
                <h3>
                  {{ contentRight }}
                </h3>
              </slot>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const props = defineProps({
  lang: String,
  titleLeft: { type: String, required: true },
  imageLeft: { type: String, default: null },
  contentLeft: { type: String, default: "" },
  titleRight: { type: String, required: true },
  imageRight: { type: String, default: null },
  contentRight: { type: String, default: "" },
});

const images = import.meta.glob("../assets/images/*", { eager: true, as: "url" });

function resolveImage(image) {
  if (!image) return null;
  if (/^https?:\/\//.test(image)) return image;
  const cleanPath = image.replace(/^(\.\.\/)+assets\/images\//, "");
  for (const key in images) {
    if (key.endsWith(cleanPath)) return images[key];
  }
  return image;
}

const imageLeftSrc = computed(() => resolveImage(props.imageLeft));
const imageRightSrc = computed(() => resolveImage(props.imageRight));
</script>

<style scoped>
.news-block.two-columns {
  display: flex;
  gap: 48px;
  justify-content: space-evenly;
}
.news-block__column {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  border-radius: 60px 0px 50px 0px;
}
.right-column {
  margin-top: -10%;
}

.right-column,
.left-column {
  width: 400px;
}

.news-block__image-wrapper {
  display: inline-block;
}
.news-block__image {
  position: relative;
  width: 400px;
  height: 400px;
  height: auto;
  display: block;
  z-index: 1;
  border: 4px solid var(--color-accent);
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center center;
}
.news-block__header__korobka {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.news-block__header {
  position: relative;
  z-index: 2;
  background: var(--color-accent);
  padding: 12px 16px;
  border-radius: 50px 0px 0px 0;
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  color: var(--color-text-dark);
  text-decoration: none;
}

.news-block__header-text {
  height: 50px;
  padding: 0;
}

.news-block__content {
  font-size: 1em;
  color: var(--color-text-light);
  flex-direction: row;
  align-items: center;
  gap: 16px;
  height: auto;
}

.content-text {
  text-align: center;
  font-weight: bold;
}
</style>
