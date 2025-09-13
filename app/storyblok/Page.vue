<template>
  <Masthead />
  <div v-editable="blok">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
  <PageFooter />
</template>

<script setup>
defineProps({ blok: Object });
</script>
