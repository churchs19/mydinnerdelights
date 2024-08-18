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
            <div class="row">
              <div class="col-xs-12">
                <a
                  href="https://www.google.com/maps/place/2713+Beaver+Ave,+Des+Moines,+IA+50310/@41.619469,-93.6747458,17z"
                  target="_blank"
                >
                  <span class="icon">
                    <i class="fa fa-building" aria-hidden="true"></i
                  ></span>
                  <span
                    >2713 Beaver Avenue<br />
                    <span style="padding-left: 38px"
                      >Des Moines, IA 50310</span
                    ></span
                  >
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <MailchimpSignup />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

.contact {
  .icon {
    width: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
  }
}

.validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

#sendmessage {
  color: green;
  border: 1px solid green;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#sendmessage.show,
#errormessage.show,
.show {
  display: block;
}

/* Contact */

.contact-container {
  line-height: 2;
}

#mc-embedded-subscribe {
  margin-top: 16px;
}

#mc_embed_signup {
  margin-top: 50px;
}

input.mce_inline_error {
  border: 2px solid $primary-pepper !important;
}

div.mce_inline_error {
  color: $primary-pepper !important;
  background: none !important;
  font-size: 16px !important;
  font-weight: normal !important;
}

@media (min-width: 768px) {
  .contact-container {
    font-size: 1.6em;
  }
}

@media (min-width: 992px) {
  #mc_embed_signup {
    margin-top: 0;
  }
}
</style>
