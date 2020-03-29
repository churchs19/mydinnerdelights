<template>
  <div v-editable="blok">
    <Masthead></Masthead>
    <div id="menu" class="section menu">
      <section class="menu-container">
        <div class="container menu-content">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <component
                v-for="blok in blok.body"
                :key="blok._uid"
                :blok="blok"
                :is="blok.component | dashify"
              ></component>
            </div>
          </div>
        </div>
      </section>
    </div>
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

<style lang="scss" scoped>
#menu {
  margin-top: 0;
}
</style>
