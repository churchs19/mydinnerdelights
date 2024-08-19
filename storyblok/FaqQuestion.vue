<template>
  <Disclosure>
    <DisclosureButton>{{ blok.question }}</DisclosureButton>
    <DisclosurePanel
      ><div v-html="answer" class="rich-text"></div
    ></DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps({ blok: Object });

const answer = computed(() => renderRichText(props.blok.answer));
</script>
