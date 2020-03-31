<template>
  <section class="photos-section">
    <div class="container">
      <div class="row">
        <div class="grid">
          <a
            v-for="(image, index) in instagram"
            :key="index"
            target="_blank"
            :href="image.permalink"
            class="photo-item"
          >
            <img
              :src="image.thumbnail_url || image.media_url"
              :alt="image.caption"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["blok", "instagram"],
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables.scss";

.photos-section {
  margin-top: 90px;

  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  .photo-item {
    box-sizing: border-box;
    flex: 0 1 calc(50% - 8px);
    display: flex;
    align-items: center;
    background-color: $secondary-light;
    border: 8px solid $secondary-light;
    margin: 4px;

    img {
      width: 100%;
    }
  }
}

@media (min-width: 768px) {
  .photos-section .photo-item {
    flex: 0 1 calc(33% - 8px);
  }
}

@media (min-width: 992px) {
  .photos-section .photo-item {
    flex: 0 1 calc(25% - 8px);
  }
}
</style>
