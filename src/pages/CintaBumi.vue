<template>
  <div class="cinta-bumi">
    <div class="cinta-bumi__header">
      <div class="cinta-bumi__header-left">
        <div class="cinta-bumi__header-icon" v-if="isMobile" @click="goBack">
          <BliIconArrowLeft fill="#858585" />
        </div>
        <div class="cinta-bumi__title">{{ $t('cinta-bumi.title') }}</div>
      </div>
    </div>


    <cinta-bumi-section/>
    <div class="cinta-bumi__scroll-top" v-if="visibleScrollTop && isMobile">
      <div class="scroll__btn" @click="goToTopPage">
        <BliIconArrowUp fill="#858585"/>
        <h6 class="scroll__btn-text">{{ $t('cinta-bumi.go-to-top-page') }}</h6>
      </div>
    </div>
  </div>
</template>

<script src="./js/cinta-bumi.js"></script>

<style lang="scss" scoped>
  @import '@/assets/scss/main';
  @import '@blibli/blue-tokens/dist/blue-tokens.scss';

  .cinta-bumi {
    @include device(mobile) {
      margin-top: -20px;
    }
    @include device(desktop) {
      padding-left: 20px;
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include device(mobile) {
        padding: 16px;
        box-shadow: 0 1px 6px 0 rgb(0 0 0 / 12%);
      }
      &-left {
        display: flex;
        align-items: center;
      }
      &-icon {
        display: flex;
        align-items: center;
        svg {
          transform: scale(0.75);
        }
      }
    }
    &__title {
      @include device(desktop) {
        font: $blu-heading-2;
        margin-bottom: 16px;
      }
      @include device(tablet) {
        font: $blu-heading-2;
      }
      @include device(mobile) {
        font: $blu-subtitle-1;
        margin-left: 8px;
      }
    }
    &__scroll-top {
      position: fixed;
      width: 100%;
      bottom: 10px;
      .scroll {
        &__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          width: 200px;
          padding: 5px;
          background: $blu-white;
          border-radius: 16px;
          box-shadow: $blu-shadow;
          &-text { margin: 0; }
        }
      }
    }
  }
</style>
