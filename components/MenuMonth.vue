<template>
  <div v-editable="blok">
    <h3 class="subheading">{{ blok.title }}</h3>

    <ul class="menu-list">
      <li v-for="(item, index) in blok.items" :key="index">
        <blok-menu-item :blok="item" :index="index"></blok-menu-item>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss">
.menu-list {
  padding-left: 0;

  li {
    list-style-type: none;
  }
}
</style>
