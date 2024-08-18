<template>
  <div v-editable="blok" class="section menu">
    <section class="menu-container">
      <div class="container menu-content">
        <div v-html="body" class="rich-text"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const body = computed(() => renderRichText(props.blok.body));
</script>
