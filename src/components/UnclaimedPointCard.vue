<template>
  <div class="unclaimed-point-card">
    <BliCard :class="{'bli-card-green': isClaimable,
            'bli-card-grey-light': !isClaimable,
            'bli-card-blue-light': isButtonClaimClicked}" no-shadow>

      <BliCardContent class="unclaimed-point-card-content">
        <div class="unclaimed-point-card-content__info">
          <div class="point-logo">
            <img src="@/assets/images/icons/gold.png"/>
          </div>
          <div class="point-info">{{ $t('cinta-bumi.loyalty-info') }}</div>
        </div>
        <div class="unclaimed-point-card-content__button">
          <BliButton class="claim-button"
                     @click="isButtonClicked()"
                     :disabled="!isClaimable || isButtonClaimClicked"
                     :color="isButtonAvailable"> {{ $t('cinta-bumi.claim') }} </BliButton>
        </div>
      </BliCardContent>
    </BliCard>
</div>
</template>

<script src="./js/unclaimed-point-card.js"></script>

<style lang="scss" scoped>
  @import '@/assets/scss/main';
  @import '@blibli/blue-tokens/dist/blue-tokens.scss';

  .bli-card-grey-light {
    background: #d6d6d6;
  }

  .bli-card-green {
    background: #CAE5A8;
  }

  .bli-card-blue-light {
    background: #DAF3FF;
  }

  .point-logo {
    margin-right: 8px;

    img {
      @include device(desktop) {
        width: 24px;
        height: 24px;
      }
      @include device(tablet) {
        width: 24px;
        height: 24px;
      }
      @include device(mobile) {
        width: 24px;
        height: 24px;
        margin-left: 2px;
        margin-right: 8px;
      }
    }
  }

  .unclaimed-point-card{
    margin-bottom: 16px;
    .blu-card__content{
      padding: 16px;
    }
  }
  .unclaimed-point-card-content{
    display: flex;
    justify-content: space-between;
    &__info{
      @include device(desktop) {
        display: flex;
        align-items: center;
        padding-left: 32px;
      }
      @include device(tablet) {
        display: flex;
        align-items: center;
      }
      @include device(mobile) {
        display: flex;
        align-items: center;
      }

      .point-info{
        @include device(desktop) {
          font: $blu-title-2;
        }
        @include device(tablet) {
          font: $blu-title-2;
        }
        @include device(mobile) {
          font: $blu-subtitle-2;
        }
      }
    }
  }
</style>
