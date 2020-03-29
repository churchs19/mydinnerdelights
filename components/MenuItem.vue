<template>
  <div v-editable="blok">
    <div :class="{ 'menu-item': true, 'menu-item-reverse': index % 2 === 1 }">
      <img
        v-if="blok.image"
        :src="blok.image"
        :alt="blok.title"
        class="menu-image"
      />
      <div>
        <h4>
          {{ blok.title }}
        </h4>
        <p>
          {{ blok.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object,
    index: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables.scss";

.menu-image {
  flex: 0 0 30%;
  max-height: 250px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  h4 {
    font-family: $subheading-font-family;
    font-size: 26px;
    color: $primary-olive-green;
  }
}

@media (min-width: 768px) {
  .menu-item {
    flex-direction: row;
    justify-content: flex-start;

    div {
      flex: 1 1 auto;
    }

    .menu-image,
    .menu-image-placeholder {
      margin-right: 20px;
    }

    // &:nth-child(2n)
    &.menu-item-reverse {
      flex-direction: row-reverse;
      justify-content: flex-end;

      .menu-image,
      .menu-image-placeholder {
        margin-left: 20px;
        margin-right: 0;
      }
    }
  }
}
</style>
