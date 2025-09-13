<template>
  <div v-editable="blok">
    <h3 class="subheading">{{ blok.title }}</h3>
    <!-- <rich-text v-if="blok.header && blok.header.content && blok.header.content.length > 0" :text="blok.header"></rich-text> -->
    <ul class="menu-list">
      <li v-for="(item, index) in blok.items" :key="index">
        <MenuItem :blok="item" :index="index"></MenuItem>
      </li>
    </ul>
    <RichText
      v-if="
        blok.footer && blok.footer.content && blok.footer.content.length > 0
      "
      :blok="blok.footer"
    ></RichText>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
.menu-list {
  padding-left: 0;

  li {
    list-style-type: none;
  }
}
</style>
