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
      <div class="row">
        <div class="col-md-12">
          <div class="privacy-policy text-center">
            <ul class="list-unstyled list-inline">
              <li>
                <nuxt-link :to="{ path: '/privacy-policy' }"
                  >privacy policy</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/terms-of-service' }"
                  >terms of service</nuxt-link
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
@import "~assets/styles/variables.scss";

#bottom-footer {
  position: relative;
  margin-top: 50px;
  background-image: url("https://res.cloudinary.com/dinner-delights/image/upload/c_limit,f_auto,q_auto:low,w_1000/v1584279687/wood-grain.jpg");
  background-size: cover;
  padding: 20px 0;
  color: $secondary-dark;

  &::before {
    content: " ";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $secondary-light;
    opacity: 0.8;
  }

  .footer-right,
  .privacy-policy {
    ul > li > a {
      color: $secondary-dark;

      &:hover {
        color: $secondary-dark;
      }
    }
  }

  .privacy-policy {
    margin-top: 10px;
    font-size: 0.9rem;
  }
}
</style>
