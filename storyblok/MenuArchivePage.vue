<template>
  <div v-editable="blok">
    <Masthead></Masthead>
    <div class="nav-buttons">
      <NuxtLink
        :to="`/${blok.previous_month.url || blok.previous_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.previous_month.url || blok.previous_month.cached_url"
        >PREVIOUS MONTH</NuxtLink
      >
      <NuxtLink
        :to="`/${blok.next_month.url || blok.next_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.next_month.url || blok.next_month.cached_url"
        >NEXT MONTH</NuxtLink
      >
    </div>
    <div id="menu" class="section menu">
      <section class="menu-container">
        <div class="container menu-content">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <StoryblokComponent
                v-for="blok in blok.body"
                :key="blok._uid"
                :blok="blok"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="nav-buttons">
      <NuxtLink
        :to="`/${blok.previous_month.url || blok.previous_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.previous_month.url || blok.previous_month.cached_url"
        >PREVIOUS MONTH</NuxtLink
      >
      <NuxtLink
        :to="`/${blok.next_month.url || blok.next_month.cached_url}`"
        class="btn btn-primary"
        v-if="blok.next_month.url || blok.next_month.cached_url"
        >NEXT MONTH</NuxtLink
      >
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
#menu {
  margin-top: 0;
}

.nav-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 16px 0;

  .btn {
    margin: 0 16px;
  }
}
</style>
