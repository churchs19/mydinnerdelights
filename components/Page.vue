<template>
  <div v-editable="blok">
    <Masthead></Masthead>
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Masthead from "./Masthead.vue";
import PageFooter from "./PageFooter.vue";

export default {
  props: ["blok"],
  components: {
    Masthead,
    PageFooter
  }
};
</script>
