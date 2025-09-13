<template>
  <div>
    <Masthead />
    <div class="container">
      <div id="availability" class="availability">
        <nuxt-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary"
          >CONTACT ME TO SCHEDULE TODAY!</nuxt-link
        >
        <iframe
          src="https://calendar.zoho.com/embed/08dc77ba1c0be80167b51905aa1f9e3881c8f120c1a7eebd5a3cdb8275278a42f179b5a452895f3c875a991ebddcddd4"
        ></iframe>
        <NuxtLink :to="{ path: '/', hash: '#contact' }" class="btn btn-primary"
          >CONTACT ME TO SCHEDULE TODAY!</NuxtLink
        >
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.availability {
  display: flex;
  flex-direction: column;

  .btn {
    align-self: center;
    flex: 0 0 auto;
    margin: 16px auto;
  }

  iframe {
    flex: 1 1 auto;
    min-height: 500px;
  }
}
</style>
