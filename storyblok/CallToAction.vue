<template>
  <div v-editable="blok" :id="blok.id" class="section">
    <section class="cta-container">
      <div class="container cta-content">
        <div class="row">
          <div
            class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3"
          >
            <div class="section-heading">
              <h2>{{ blok.title }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center">
            <rich-text :text="blok.text"></rich-text>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center">
            <blok-call-to-action-button
              v-if="blok.button && blok.button.length > 0"
              :blok="blok.button[0]"
            ></blok-call-to-action-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.cta-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 2vw 5vw 5vw 5vw;
}
</style>
