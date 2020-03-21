<template>
  <li v-editable="blok">
    <img
      v-if="blok.image"
      :src="blok.image"
      :alt="blok.title"
      class="menu-image"
    />
    <div>
      <h4>
        {{ blok.title }}
      </h4>
      <p>
        {{ blok.description }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
</style>
