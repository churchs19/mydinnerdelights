<template>
  <!-- <div class="panel panel-default">
    <div class="panel-heading" role="tab" :id="`faq-question-${index}`">
      <h4 class="panel-title">
        <a
          role="button"
          data-toggle="collapse"
          :href="`#faq-question-${index}`"
          aria-expanded="true"
          :aria-controls="`faq-question-${index}-collapse`"
        >
          {{ blok.question }}
        </a>
      </h4>
    </div>
    <div
      :id="`faq-question-${index}-collapse`"
      class="panel-collapse collapse in"
      role="tabpanel"
      :aria-labelledby="`faq-question-${index}`"
    >
      <div class="panel-body">
        <rich-text
          v-if="
            blok.answer && blok.answer.content && blok.answer.content.length > 0
          "
          :text="blok.answer"
        ></rich-text>
      </div>
    </div>
  </div> -->
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" :id="`faqQuestion${index}`">
      <h4 class="panel-title">
        <a
          class="collapsed"
          role="button"
          data-toggle="collapse"
          :href="`#faqCollapse${index}`"
          aria-expanded="false"
          :aria-controls="`faqCollapse${index}`"
        >
          {{ blok.question }}
        </a>
      </h4>
    </div>
    <div
      :id="`#faqCollapse${index}`"
      class="panel-collapse collapse"
      role="tabpanel"
      :aria-labelledby="`faqQuestion${index}`"
    >
      <div class="panel-body">
        <rich-text
          v-if="
            blok.answer && blok.answer.content && blok.answer.content.length > 0
          "
          :text="blok.answer"
        ></rich-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok", "index"],
};
</script>

<style lang="scss">
@import "~assets/styles/variables.scss";
</style>
