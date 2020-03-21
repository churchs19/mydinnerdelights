<template>
  <section v-editable="blok" class="feature-image">
    <div class="jumbotron">
      <div class="container">
        <div class="clearfix">
          <img
            src="https://res.cloudinary.com/dinner-delights/image/upload/v1584279687/DinnerDelights_Logo_Eggplant_1C_7652C_w_white_shadow_jrlfju.svg"
            alt="Dinner Delights"
            class="pull-right"
          />
        </div>
        <p>
          <nuxt-link
            class="btn btn-primary btn-lg"
            :to="{ path: '/', hash: '#contact' }"
            role="button"
            >Schedule a party today!</nuxt-link
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables.scss";

/* Feature image */
.feature-image {
  position: relative;
  background-color: $secondary-light;
  margin-bottom: 15vh;
}

.feature-image::before {
  display: block;
  content: " ";
  position: absolute;
  left: calc(10vw + 50px);
  right: 0;
  bottom: 10px;
  z-index: 3;
  border-bottom: 10px dotted $secondary-light;
}

.feature-image::after {
  display: block;
  content: " ";
  position: absolute;
  background: $primary-olive-green;
  bottom: -7%;
  left: 10vw;
  right: 0;
  height: 7%;
  z-index: 2;
}

.jumbotron {
  background-color: $secondary-light;
  background-image: url("https://res.cloudinary.com/dinner-delights/image/upload/c_limit,f_auto,q_auto:good,w_1200/v1584279686/chopping-vegetables.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 80vh;
  color: $primary-olive-green;
  font-family: $heading-font-family;
  clip-path: polygon(15vw 0, 100% 0, 100% 100%, 0 100%);
}

.jumbotron::before {
  display: block;
  content: " ";
  position: absolute;
  background: #000000;
  bottom: 0;
  left: 10vw;
  right: 0;
  height: 12%;
  opacity: 0.5;
  z-index: 2;
}

.jumbotron .container {
  height: 100%;
}

.jumbotron .container img {
  max-width: 80vw;
}

.jumbotron p {
  padding-left: 10vw;
  z-index: 10;
}

.jumbotron h1 {
  display: inline-block;
  padding: 15px 25vw 15px 15px;
  background-color: $primary-eggplant;
  color: $secondary-light;
  margin: 5px;
}
</style>
