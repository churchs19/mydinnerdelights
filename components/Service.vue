<template>
  <div class="service-block">
    <div class="icon-box">
      <div class="icon-border">
        <img
          :src="blok.icon"
          height="100"
          width="100"
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
    <h4>{{ blok.title }}</h4>
    <p class="text">
      {{ blok.description }}
    </p>
    <div class="price-container">
      <blok-service-price
        v-for="(price, index) in blok.prices"
        :key="index"
        :blok="price"
      ></blok-service-price>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables.scss";

.service-block {
  flex: 1 0 100%;
  display: flex;
  padding: 25px 0;
  text-align: center;
  flex-direction: column;
  align-items: stretch;
  align-content: center;

  h4 {
    flex: 0 0 52px;
  }

  .text {
    text-align: left;
    flex: 1 0 auto;
  }
}

.icon-box {
  flex: 0 0 auto;

  .icon-border {
    display: inline-block;
    border-radius: 50%;
    border: 10px solid $primary-pepper;
  }
}

.price-container {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .service-block {
    flex: 1 0 50%;
    padding: 25px;
  }
}
</style>
