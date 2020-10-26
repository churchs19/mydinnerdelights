<template>
  <div class="rich-text">
    <v-runtime-template v-if="hasRichtext" :template="richtext" />
    <div v-else-if="hasText" v-html="text"></div>
  </div>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template"

export default {
  props: ['text'],
  created() {
    this.$storyapi.setComponentResolver((component, blok) => {
      return `<component :blok='${JSON.stringify(blok)}'
                         :is="'${component}' | dashify"></component>`
    });
  },
  components: {
    VRuntimeTemplate
  },
  computed: {
    richtext() {
      return '<div>' + this.$storyapi.richTextResolver.render(this.text) + '</div>'
    },
    hasRichtext() {
      return this.text && this.text.content && this.text.content.length > 0;
    },
    hasText() {
      return this.text && this.text.length > 0;
    }
  }
}
</script>