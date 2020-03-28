<template>
  <div id="availability" class="availability" v-editable="blok">
    <nuxt-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary"
      >CONTACT ME TO SCHEDULE TODAY!</nuxt-link
    >
    <br />
    <br />
    <iframe
      src="https://calendar.zoho.com/embed/08dc77ba1c0be80167b51905aa1f9e3881c8f120c1a7eebd5a3cdb8275278a42f179b5a452895f3c875a991ebddcddd4"
      style="width:100%;height:500px"
    ></iframe>
    <br />
    <br />
    <nuxt-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary"
      >CONTACT ME TO SCHEDULE TODAY!</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss" scoped>
</style>
