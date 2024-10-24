<template>
  <div id="services" class="section services" v-editable="blok">
    <section class="services-style-one">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-3">
            <div class="section-heading">
              <h2>Services</h2>
            </div>
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-sm-10 col-sm-offset-1 service-container">
            <Service
              v-for="(service, index) in blok.services"
              :key="index"
              :blok="service"
            ></Service>
          </div>
        </div>
      </div>
    </section>
    <div
      class="service-footer hidden-xs"
      v-if="
        blok.footer_text ||
        (blok.footer_call_to_action && blok.footer_call_to_action_link)
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="service-footer-left" v-if="blok.footer_text">
              <h3>
                <span>{{ blok.footer_text }}</span>
              </h3>
            </div>
          </div>
          <div class="col-md-5">
            <div
              class="service-footer-right"
              v-if="
                blok.footer_call_to_action && blok.footer_call_to_action_link
              "
            >
              <a class="btn" :href="blok.footer_call_to_action_link.url">{{
                blok.footer_call_to_action
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.services {
  background-attachment: scroll;
  padding-bottom: 0px;
  padding-top: 0px;

  .col-md-6 {
    padding: 0;
  }

  .service-heading {
    text-align: center;
  }

  .service-heading h2 {
    font-weight: 700;
    font-size: 45px;
  }

  .service-heading p {
    margin-top: 20px;
    line-height: 25px;
    color: $secondary-light;
    margin-bottom: 50px;
  }

  .service-footer {
    background-color: $primary-olive-green;
    padding: 30px 0;
  }

  .service-footer-left {
    h3 {
      font-family: $base-font-family;
      font-weight: 600;
      font-size: 22px;
      color: $secondary-light;

      > span {
        color: $secondary-light;
      }

      p {
        font-size: 16px;
        color: $secondary-light;
      }
    }
  }

  .service-footer-right {
    float: right;
    line-height: 80px;

    .btn {
      background-color: $primary-pepper;
      font-weight: 600;
      color: $secondary-light;
      border: 3px solid $secondary-light;

      &:hover {
        background-color: $secondary-light;
        color: $primary-pepper;
        border-color: $secondary-light;
      }
    }
  }
}

.services-style-one {
  background: $secondary-light;
  margin-top: 25px;

  .service-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    align-content: center;
    justify-content: space-between;
  }
}
</style>
