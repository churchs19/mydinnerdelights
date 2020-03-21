<template>
  <div id="contact" v-editable="blok" class="section contact">
    <section class="contact-container">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-xs-12">
                <h2>{{ blok.title }}</h2>
              </div>
            </div>
            <div class="row" v-for="(link, index) in blok.links" :key="index">
              <div class="col-xs-12">
                <a :href="link.link.url" target="_blank">
                  <span class="icon">
                    <i :class="['fa', link.icon]" aria-hidden="true"></i
                  ></span>
                  <span>{{ link.text }}</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <mailchimp-signup></mailchimp-signup>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MailchimpSignup from "./MailchimpSignup";

export default {
  props: ["blok"],
  components: {
    "mailchimp-signup": MailchimpSignup
  }
};
</script>

<style lang="scss">
.contact {
  .icon {
    width: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
  }
}
</style>
