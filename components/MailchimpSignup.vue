<template>
  <div class="mailchimp">
    <!-- Begin MailChimp Signup Form -->
    <!-- <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"> -->
    <div id="mc_embed_signup">
      <form
        action="https://mydinnerdelights.us14.list-manage.com/subscribe/post?u=5177ad8cdfc5f7ac669b7fde5&amp;id=552fbf4c81"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to our mailing list</h2>
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label for="mce-FNAME"
              >First Name
              <span class="asterisk">*</span>
            </label>
            <input
              type="text"
              value=""
              name="FNAME"
              class="required"
              id="mce-FNAME"
            />
          </div>
          <div class="mc-field-group">
            <label for="mce-LNAME"
              >Last Name
              <span class="asterisk">*</span>
            </label>
            <input
              type="text"
              value=""
              name="LNAME"
              class="required"
              id="mce-LNAME"
            />
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL"
              >Email Address
              <span class="asterisk">*</span>
            </label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display: none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style="display: none"
            ></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_5177ad8cdfc5f7ac669b7fde5_552fbf4c81"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<script setup>
import { useScriptTag } from "@vueuse/core";

useScriptTag("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js");
useScriptTag("/js/mailchimp.js");
</script>
