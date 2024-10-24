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
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: Object,
  index: {
    type: Number,
    default: 0,
  },
});

const description = computed(() => {
  if (typeof props.blok.description === "string") {
    return props.blok.description;
  }
  return renderRichText(props.blok.description);
});
// const description = computed(() => "");
</script>

<style lang="scss" scoped>
.menu-image {
  flex: 0 0 30%;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
