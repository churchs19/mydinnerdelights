<template>
  <!--top header-->
  <header id="home">
    <!--main-nav-->
    <div id="main-nav">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <nuxt-link to="/" class="navbar-brand">
              <img
                alt="Dinner Delights"
                src="https://res.cloudinary.com/dinner-delights/image/upload/c_limit,h_55/v1584279687/DinnerDelights_Logo_Eggplant_1C_7652C_pcehsq.svg"
              />
            </nuxt-link>
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#ftheme"
            >
              <span class="sr-only">Toggle</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse" id="ftheme">
            <ul class="nav navbar-nav navbar-right">
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
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss">
@import "~assets/styles/variables.scss";

.navbar {
  margin: 0;
}

.navbar-brand {
  position: relative;
  padding-left: 55px;
}

.navbar-brand img {
  position: absolute;
  top: 0;
  left: 15px;
  height: 50px;
  width: 50px;
}

#main-nav {
  padding: 15px 0;
  position: relative;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $secondary-light;
    opacity: 0.8;
  }

  &.affix {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    -moz-box-shadow: 0 1px 2px $secondary-dark;
    -webkit-box-shadow: 0 1px 2px $secondary-dark;
    box-shadow: 0 5px 5px rgba(0, 20, 64, 0.15);
    transition: all 0.3s;

    &::before {
      opacity: 0.9;
    }
  }

  .navbar-toggle {
    background-color: $primary-olive-green;

    span {
      background-color: $secondary-light;
    }
  }

  .navbar-right {
    margin-top: 10px;

    li {
      a {
        font-family: $base-font-family;
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
        color: $secondary-dark;
        padding-top: 0;
        padding-bottom: 0;
        text-transform: uppercase;

        &:focus,
        &:hover,
        &.nuxt-link-exact-active {
          color: $secondary-dark;
          background: none;
          outline: none;
        }
      }
    }
  }
}
</style>
