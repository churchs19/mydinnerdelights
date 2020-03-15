<template>
  <!--contact form-->
  <div id="contact" class="section">
    <section class="contact-container">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-xs-12">
                <h2>Contact</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a href="mailto:andrea@mydinnerdelights.com">
                  <i class="fa fa-envelope" aria-hidden="true"></i
                  >&nbsp;&nbsp;&nbsp;andrea@mydinnerdelights.com
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a href="tel:+15156355517">
                  <i class="fa fa-mobile" aria-hidden="true"></i
                  >&nbsp;&nbsp;&nbsp;(515) 635-5517
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a href="https://www.facebook.com/MyDinnerDelights/">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i
                  >&nbsp;/MyDinnerDelights
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a href="https://www.instagram.com/mydinnerdelights/">
                  <i class="fa fa-instagram" aria-hidden="true"></i
                  >&nbsp;/MyDinnerDelights
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
  components: {
    "mailchimp-signup": MailchimpSignup
  }
};
</script>

<style>
</style>
