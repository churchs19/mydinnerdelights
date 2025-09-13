<template>
  <div class="faq-question-container" v-editable="blok">
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="faq-question">
        <span class="icon">
          <i
            :class="['fa', open ? 'fa-chevron-down' : 'fa-chevron-right']"
            aria-hidden="true"
          ></i
        ></span>
        <span class="faq-question-text">
          {{ blok.question }}
        </span>
      </DisclosureButton>
      <DisclosurePanel class="faq-answer"
        ><div v-html="answer" class="rich-text"></div
      ></DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps({ blok: Object });

const answer = computed(() => renderRichText(props.blok.answer));
</script>

<style lang="scss">
.faq-question-container {
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;

  .faq-question {
    display: flex;
    flex-direction: row;
    border: none;
    background: none;
    font-weight: bold;
    color: $primary-olive-green;
    line-height: 1.8;
    text-align: left;

    .icon {
      margin-right: 16px;
      border-bottom: 1px solid transparent;
      flex: 0 0 auto;
    }

    .faq-question-text {
      flex: 1 1 auto;
      border-bottom: 1px solid $primary-olive-green;
      padding-bottom: 10px;
    }
  }

  .faq-answer {
    margin-top: 16px;
    padding-left: 36px;
  }
}
</style>
