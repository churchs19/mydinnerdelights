<template>
  <li v-editable="blok">
    <h3 class="subheading">{{ blok.title }}</h3>

    <ul class="menu-list">
      <blok-menu-item
        v-for="(item, index) in blok.items"
        :key="index"
        :blok="item"
      ></blok-menu-item>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
