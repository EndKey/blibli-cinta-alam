<template>
  <div class="cinta-bumi-section">
    <div class="cinta-bumi-section__header">
      <div class="cinta-bumi-section__header__welcome">
        Hi, {{ memberProfile.name }}!
      </div>
      <div class="cinta-bumi-section__header__thankyou">
        Thank you so much for joining #AksiCintaBumi
      </div>
      <carbon-footprint-card/>
      <unclaimed-point-card/>
      <project-section/>
      <carbon-offset-history/>
    </div>

  </div>
</template>

<script src="./js/cinta-bumi-section.js"></script>

<style lang="scss" scoped>
  @import '@/assets/scss/main';
  @import '@blibli/blue-tokens/dist/blue-tokens.scss';

  .cinta-bumi-section{
    line-height:1em;

    &__header {
      padding: 15px;
      line-height: 1em;
      &__welcome {
        @include device(desktop) {
          font: $blu-heading-2;
          margin-bottom: 5px;
        }
        @include device(tablet) {
          font: $blu-heading-2;
        }
        @include device(mobile) {
          font: $blu-title-2;
        }
      }
      &__thankyou {
        @include device(desktop) {
          font: $blu-subtitle-2;
          margin-bottom: 10px;
        }
        @include device(tablet) {
          font: $blu-subtitle-2;
        }
        @include device(mobile) {
          font: $blu-body-text-1;
          margin-bottom: 10px;
        }
      }
    }

  }

</style>
