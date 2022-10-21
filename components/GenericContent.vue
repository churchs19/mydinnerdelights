<template>
  <div v-editable="blok">
    <div class="container generic-content">
      <template v-for="blok in blok.body">
        <component
          :blok="blok"
          :is="blok.component | dashify"
          :key="blok._uid"
        ></component>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
};
</script>

<style lang="scss">
@import "~assets/styles/variables.scss";

.generic-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 5vw;
  margin: 35px 5px 5px 5px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
