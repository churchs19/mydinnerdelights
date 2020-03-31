<template>
  <div v-editable="blok">
    <Masthead></Masthead>
    <div class="nav-buttons">
      <nuxt-link
        :to="`/${blok.previous_month.url || blok.previous_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.previous_month.url || blok.previous_month.cached_url"
        >PREVIOUS MONTH</nuxt-link
      >
      <nuxt-link
        :to="`/${blok.next_month.url || blok.next_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.next_month.url || blok.next_month.cached_url"
        >NEXT MONTH</nuxt-link
      >
    </div>
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
    <div class="nav-buttons">
      <nuxt-link
        :to="`/${blok.previous_month.url || blok.previous_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.previous_month.url || blok.previous_month.cached_url"
        >PREVIOUS MONTH</nuxt-link
      >
      <nuxt-link
        :to="`/${blok.next_month.url || blok.next_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.next_month.url || blok.next_month.cached_url"
        >NEXT MONTH</nuxt-link
      >
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

.nav-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 16px 0;

  .btn {
    margin: 0 16px;
  }
}
</style>
