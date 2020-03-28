<template>
  <!-- footer -->
  <footer id="bottom-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="footer-left">
            &copy; 2018-{{ currentYear }} Dinner Delights
          </div>
        </div>
        <div class="col-md-8">
          <div class="footer-right visible-md-block visible-lg-block">
            <ul class="list-unstyled list-inline pull-right">
              <li>
                <nuxt-link :to="{ path: '/', hash: '#home' }">home</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#about' }">about</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#services' }"
                  >services</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#menu' }">menu</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ path: '/', hash: '#join' }"
                  >join a party</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/availability' }"
                  >availability</nuxt-link
                >
              </li>
              <!--<li><nuxt-link :to="{ path: '/', hash: '#faq' }">faq</nuxt-link></li>-->
              <li>
                <nuxt-link :to="{ path: '/', hash: '#contact' }"
                  >contact</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import * as moment from "moment";

export default {
  props: ["blok"],
  computed: {
    currentYear() {
      return moment().format("YYYY");
    }
  }
};
</script>

<style lang="scss">
</style>
