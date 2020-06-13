<template>
  <div id="menu" v-editable="blok" class="section menu">
    <section class="menu-container">
      <div class="container menu-content">
        <div class="row">
          <div
            class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3"
          >
            <div class="section-heading">
              <h2>{{ blok.title }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <!-- <div id="menu-carousel" class="flexslider"> -->
            <!-- Wrapper for slides -->
            <!-- <ul class="slides">
                <blok-menu-month
                  v-for="(month, index) in blok.months"
                  :key="index"
                  :blok="month"
                ></blok-menu-month>
              </ul> -->
            <!-- </div> -->
            <vue-tabs>
              <v-tab
                v-for="(month, index) in blok.months"
                :key="index"
                :title="month.title"
              >
                <blok-menu-month :blok="month"></blok-menu-month>
              </v-tab>
            </vue-tabs>
          </div>
        </div>
        <!-- <% if (config.holiday_sides) { %> <%- partial('_partial/holiday-sides')
        %> <% } %> <% if (config.gifts_in_a_jar) { %> <%-
        partial('_partial/gifts-in-a-jar') %> <% } %> -->
        <div
          class="row menu-btn-container"
          v-if="blok.archive_link.url || blok.archive_link.cached_url"
        >
          <div class="col-sm-4 col-sm-offset-4 text-center">
            <nuxt-link
              :to="`/${blok.archive_link.url || blok.archive_link.cached_url}`"
              class="btn btn-default btn-block"
              >Previous Menus</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

export default {
  components: {
    VueTabs,
    VTab
  },
  props: ["blok"]
};
</script>

<style lang="scss">
@import "~assets/styles/variables.scss";

.menu-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 2vw 5vw 5vw 5vw;
}

.menu-btn-container {
  margin-top: 30px;
}

.vue-tabs {
  .nav-tabs {
    border-bottom: none;
    display: flex;
    justify-content: center;

    > li {
      float: none;

      > a,
      > a:focus,
      > a:hover {
        border: 2px solid transparent;
        border-radius: 0;
        color: $primary-olive-green;
      }

      &.active {
        > a,
        > a:focus,
        > a:hover {
          border-color: transparent;
          border-bottom-color: $primary-eggplant;
          color: $primary-eggplant;
          background-color: transparent;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .menu-container {
    padding: 15px;
  }
}
</style>
