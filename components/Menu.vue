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
            <div id="menu-carousel" class="flexslider">
              <!-- Wrapper for slides -->
              <ul class="slides">
                <blok-menu-month
                  v-for="(month, index) in blok.months"
                  :key="index"
                  :blok="month"
                ></blok-menu-month>
              </ul>
            </div>
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
              :to="blok.archive_link.url || blok.archive_link.cached_url"
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
export default {
  props: ["blok"],
  mounted() {
    //Slider
    $(".flexslider").flexslider({
      pauseOnAction: true,
      pauseOnHover: true,
      animation: "slide"
    });
  }
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

.flexslider {
  border: none;
  background: $secondary-light;

  .flex-viewport {
    max-height: unset;
  }

  .slides {
    background: $secondary-light;
  }
}

.flex-direction-nav {
  a,
  a:before {
    height: 44px;
    color: $primary-olive-green;
  }
}

.flex-control-paging {
  li {
    a {
      background: #8c9c78;
      background: rgba(120, 156, 74, 0.5);

      &:hover {
        background: #809c5d;
        background: rgba(120, 156, 74, 0.7);
      }

      &.flex-active {
        background: $primary-olive-green;
        background: rgba(120, 156, 74, 0.9);
        cursor: default;
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
