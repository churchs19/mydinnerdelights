<template>
  <div class="price" v-editable="blok">
    <div class="price-value" v-if="blok.price">{{ blok.price }}</div>
    <div class="text-sm" v-if="blok.unit">{{ blok.unit }}</div>
    <div>{{ blok.description }}</div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.price {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: $primary-eggplant;
  color: $secondary-light;
  height: 135px;
  width: 135px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  margin: 15px auto;

  .text-sm {
    font-size: 0.7em;
    margin-top: 0;
    color: rgba(255, 255, 255, 0.9);
  }

  .price-value {
    font-size: 1.8em;
    font-weight: bold;
  }
}
</style>
