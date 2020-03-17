<template>
  <div :id="blok.id" class="section">
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
            <a
              :href="blok.cta_link"
              class="btn btn-call-to-action"
              target="_blank"
              >{{ blok.cta_label }}</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables.scss";

.cta-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 2vw 5vw 5vw 5vw;
}
</style>
