<template>
  <div v-editable="blok">
    <Masthead></Masthead>
    <template v-for="blok in blok.body">
      <component
        v-if="blok.component !== 'instagram'"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      <component
        v-else
        :key="blok._uid"
        :blok="blok"
        :instagram="instagram"
        :is="blok.component | dashify"
      >
      </component>
    </template>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Masthead from "./Masthead.vue";
import PageFooter from "./PageFooter.vue";

export default {
  props: ["blok", "instagram"],
  components: {
    Masthead,
    PageFooter,
  },
};
</script>
