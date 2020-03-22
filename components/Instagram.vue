<template>
  <section class="section">
    <div class="instagram-feed"></div>
    <div class="clearfix">&nbsp;</div>
  </section>
</template>

<script>
export default {
  props: ["blok"],
  mounted() {
    const $this = this;
    (function() {
      new InstagramFeed({
        username: $this.blok.instagram_user,
        container: $this.$el,
        display_profile: false,
        display_biography: false,
        display_gallery: true,
        callback: null,
        styling: true,
        items: $this.blok.num_pictures,
        items_per_row: 4,
        margin: 1
      });
    })();
  }
};
</script>

<style>
</style>
