<template>
  <div class="faq-section" v-editable="blok">
    <h2>{{ blok.title }}</h2>

    <div v-for="question in blok.questions" :key="question._uid">
      <StoryblokComponent :blok="question"></StoryblokComponent>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss"></style>
