<template>
  <div id="faq-section" v-editable="blok">
    <h2>{{ blok.title }}</h2>
    <vue-collapsible-panel-group>
      <blok-faq-question
        v-for="(question, index) in blok.questions"
        :key="index"
        :blok="question"
        :index="index"
      />
    </vue-collapsible-panel-group>
  </div>
</template>

<script>
export default {
  props: ["blok"],
};
</script>

<style lang="scss">
@import "~assets/styles/variables.scss";
</style>
