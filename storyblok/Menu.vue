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
          <div class="col-md-10 col-md-offset-1" id="menu-months-container">
            <TabGroup>
              <TabList>
                <Tab v-for="(month, index) in blok.months" :key="index">
                  {{ month.title }}
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel v-for="(month, index) in blok.months" :key="index">
                  <MenuMonth :blok="month"></MenuMonth>
                </TabPanel>
              </TabPanels>
            </TabGroup>
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
            <NuxtLink
              :to="`/${blok.archive_link.url || blok.archive_link.cached_url}`"
              class="btn btn-default btn-block"
              >Previous Menus</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// import { VueTabs, VTab } from "vue-nav-tabs";
// import "vue-nav-tabs/themes/vue-tabs.css";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

defineProps({ blok: Object });
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

.menu-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 2vw 5vw 5vw 5vw;
}

.menu-btn-container {
  margin-top: 30px;
}

#menu-months-container {
  div[role="tablist"] {
    display: flex;
    justify-content: center;

    button,
    button:focus,
    button:active,
    button:focus-visible,
    button:focus-within,
    button:hover {
      margin: 0 10px;
      padding: 10px 15px;
      border: 2px solid transparent;
      border-radius: 0;
      color: $primary-olive-green;
      outline: none;
      background-color: transparent;

      &[data-headlessui-state="selected"] {
        border-bottom-color: $primary-eggplant;
        color: $primary-eggplant;
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
