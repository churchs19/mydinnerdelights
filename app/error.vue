<template>
  <div>
    <Masthead />
    <div class="container error-content">
      <h1>{{ notFound ? "Page not found" : "Something went wrong" }}</h1>
      <p>
        {{
          notFound
            ? "Sorry, we couldn't find that page. It may have moved, or the link may be out of date."
            : "Sorry, something went wrong loading this page. Please try again in a moment."
        }}
      </p>
      <div class="error-actions">
        <button type="button" class="btn btn-primary" @click="goTo('/')">
          Home
        </button>
        <a class="btn btn-call-to-action" href="https://shop.mydinnerdelights.com"
          >Order meals</a
        >
        <button
          type="button"
          class="btn btn-default"
          @click="goTo('/catering/menu')"
        >
          Catering menu
        </button>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
const props = defineProps({ error: Object });

const notFound = computed(() => props.error?.statusCode === 404);

useSeoMeta({
  title: () =>
    `${notFound.value ? "Page not found" : "Something went wrong"} | Dinner Delights`,
  robots: "noindex",
});

// clearError is Nuxt's documented way to reset the error state and navigate away
const goTo = (path) => clearError({ redirect: path });
</script>

<style lang="scss" scoped>
// Same panel as GenericContent; its styles aren't loaded on the error page in
// production builds because that component's CSS is split into its own chunk
.error-content {
  border: 8px solid $primary-olive-green;
  background-color: $secondary-light;
  padding: 5vw;
  margin: 35px auto 5px;
  text-align: center;

  p {
    font-size: 18px;
  }
}

.error-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;

  // The three button styles come with different sizes; even them out
  .btn {
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    border-width: 3px;
    text-transform: uppercase;
  }
}
</style>
