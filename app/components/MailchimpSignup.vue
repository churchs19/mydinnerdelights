<template>
  <div class="mailchimp">
    <div id="mc_embed_shell">
      <!-- <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      </style> -->
      <div id="mc_embed_signup">
        <form
          action="https://mydinnerdelights.us14.list-manage.com/subscribe/post?u=5177ad8cdfc5f7ac669b7fde5&amp;id=552fbf4c81&amp;f_id=00205ce5f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to our mailing list</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME"
                >First Name <span class="asterisk">*</span></label
              ><input
                type="text"
                name="FNAME"
                class="required text"
                id="mce-FNAME"
                value=""
                required=""
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME"
                >Last Name <span class="asterisk">*</span></label
              ><input
                type="text"
                name="LNAME"
                class="required text"
                id="mce-LNAME"
                value=""
                required=""
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL"
                >Email Address <span class="asterisk">*</span></label
              ><input
                type="email"
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                value=""
                required=""
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
                name="subscribe"
                id="mc-embedded-subscribe"
                class="btn btn-primary"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScriptTag } from "@vueuse/core";

useScriptTag("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js");
useScriptTag("/js/mailchimp.js");
</script>
