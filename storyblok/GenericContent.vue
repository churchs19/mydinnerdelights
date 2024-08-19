<template>
  <div v-editable="blok">
    <div class="container generic-content">
      <h1 v-if="blok.title && blok.title.length > 0">{{ blok.title }}</h1>
      <template v-for="blok in blok.body">
        <StoryblokComponent :blok="blok"></StoryblokComponent>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

.generic-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 5vw;
  margin: 35px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-align: center;
  }
}
</style>
