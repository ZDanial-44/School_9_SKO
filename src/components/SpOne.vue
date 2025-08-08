<template>
  <div class="wrapper">
    <div class="left-content-vrapper">
      <p class="left-content-top" v-if="titleLeft">
        <RouterLink :to="to">
          {{ titleLeft }}
        </RouterLink>
      </p>
      <p class="left-content-bottom" v-if="contentLeft">
        {{ contentLeft }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { RouterLink } from 'vue-router';
  // import { computed } from 'vue';

  const route = useRoute();

  const props = defineProps({
    lang: String,
    default: 'kz',
    to: { type: [String, Object], required: true },
    titleLeft: { type: String, required: true },
    contentLeft: { type: String, default: null},
  });
</script>

<style scoped>
  .wrapper {
    width: 1000px;
    margin-left: -20%;
    display: flex;
    align-items: flex-start;
  }
  .left-content-vrapper {
    flex: 0 0 40%;
  }
  .left-content-top {
    display: flex;
    flex-direction: column;
    color: var(--color-primary-dark);
    background-color: var(--color-bg);
    border-right: 2px solid var(--color-primary-dark);
    border-bottom: 2px solid var(--color-primary-dark);
    border-top: 2px solid var(--color-accent);
    border-left: 3px solid var(--color-accent);
    border-radius: 15px;
    padding: 12px;
    margin: 16px 0 4px 0;
    font-weight: bold;
  }

  .left-content-bottom {
    display: inline;
    padding: 8px;
    border-radius: 0 0 12px 12px;
    color: var(--color-text-light);
    background-color: var(--color-primary-dark);
  }
</style>
