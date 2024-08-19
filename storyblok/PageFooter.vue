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
                <NuxtLink :to="{ path: '/', hash: '#home' }">home</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ path: '/', hash: '#about' }">about</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ path: '/', hash: '#services' }"
                  >services</NuxtLink
                >
              </li>
              <li>
                <NuxtLink :to="{ path: '/', hash: '#menu' }">menu</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ path: '/', hash: '#join' }"
                  >join a party</NuxtLink
                >
              </li>
              <li>
                <NuxtLink :to="{ path: '/availability' }"
                  >availability</NuxtLink
                >
              </li>
              <!--<li><NuxtLink :to="{ path: '/', hash: '#faq' }">faq</NuxtLink></li>-->
              <li>
                <NuxtLink :to="{ path: '/', hash: '#contact' }"
                  >contact</NuxtLink
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
                <NuxtLink :to="{ path: '/privacy-policy' }"
                  >privacy policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink :to="{ path: '/terms-of-service' }"
                  >terms of service</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({ blok: Object });

import { computed } from "vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

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
