<template>
  <div class="text-center">
    <a
      v-editable="blok"
      :href="blok.cta_link.url"
      class="btn btn-call-to-action"
      target="_blank"
      >{{ blok.cta_label }}</a
    >
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
