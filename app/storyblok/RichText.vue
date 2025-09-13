<template>
  <div v-editable="blok">
    <div class="rich-text" v-html="body" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const body = computed(() => {
  if (typeof props.blok.body === "string") {
    return props.blok.body;
  }
  return renderRichText(props.blok.body);
});
</script>
