<template>
  <div id="about" v-editable="blok">
    <div class="container about-content">
      <div class="headshot">
        <img
          :src="blok.photo"
          :alt="blok.photo_description"
          class="img-responsive"
        />
      </div>
      <div class="content">
        <h2>{{ blok.title }}</h2>
        <div v-html="description" class="rich-text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const description = computed(() => renderRichText(props.blok.description));
</script>

<style lang="scss">
.about-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 5vw;
  margin: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;

  .headshot,
  .content {
    flex: 1 0 100%;
    padding: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .rich-text {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        text-align: center;
      }
    }
  }
}

@media (min-width: 768px) {
  .about-content {
    .headshot {
      flex: 1 0 33%;
    }
    .content {
      flex: 2 0 66%;
    }
  }
}
</style>
