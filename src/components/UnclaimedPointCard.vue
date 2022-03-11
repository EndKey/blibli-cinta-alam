<template>
  <div class="unclaimed-point-card">
    <BliCard class="bli-card-grey-light" no-shadow>
      <BliCardContent class="unclaimed-point-card-content">
        <div class="unclaimed-point-card-content__info">
          <div class="point-logo">
            <img src="@/assets/images/icons/gold.png"/>
          </div>
          <div class="point-info">Keep offseting your carbon footprint 1 tree = 40poin!</div>
        </div>
        <div class="unclaimed-point-card-content__button">
          <BliButton class="claim-button" disabled> Claim </BliButton>
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
    background: #F1F1F1;
  }

  >>> .blu-btn{
    background-color: #F1F1F1;
    border-color: #F1F1F1;
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
