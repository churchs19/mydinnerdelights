<template>
  <div class="rich-text">
    <div v-if="hasRichtext" v-html="richtext"></div>
    <div v-else-if="hasText" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  computed: {
    richtext() {
      return this.text ? this.$storyapi.richTextResolver.render(this.text) : "";
    },
    hasRichtext() {
      return this.text && this.text.content && this.text.content.length > 0;
    },
    hasText() {
      return this.text && this.text.length > 0;
    }
  }
};
</script>
