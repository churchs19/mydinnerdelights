<template>
  <div v-editable="blok">
    <h3 class="subheading">{{ blok.title }}</h3>
    <rich-text v-if="blok.header && blok.header.content && blok.header.content.length > 0" :text="blok.header"></rich-text>
    <ul class="menu-list">
      <li v-for="(item, index) in blok.items" :key="index">
        <blok-menu-item :blok="item" :index="index"></blok-menu-item>
      </li>
    </ul>
    <rich-text v-if="blok.footer && blok.footer.content && blok.footer.content.length > 0" :text="blok.footer"></rich-text>
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
