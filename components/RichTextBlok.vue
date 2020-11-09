<template>
  <div v-editable="blok" class="section menu">
    <section class="menu-container">
      <div class="container menu-content">
        <rich-text :text="blok.body"></rich-text>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>