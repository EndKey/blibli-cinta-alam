<template>
  <div class="carbon-offset-history">
    <div class="carbon-offset-history__top">
      <div class="carbon-offset-history__top__title">
        {{ $t('cinta-bumi.carbon-footprint-history') }}
      </div>
    </div>

    <BliList>
      <BliListContent v-for="(historyList, n) in this.historyList" :value="n.toString()" :key="n">
        <div class="history-wrapper">
          <div class="history-left">
            <div class="history-left__top">
              {{historyList.description}}
            </div>
            <div class="history-left__bottom">
              {{waktu(historyList.timestamp)}}
            </div>
          </div>
          <div class="history-right">
            <div class="history-right__top">
              Rp{{historyList.price}}
            </div>
            <div class="history-right__bottom">
              ≈ {{historyList.trees}} trees
            </div>
          </div>
        </div>

      </BliListContent>
    </BliList>


</div>
</template>

<script src="./js/carbon-offset-history.js"></script>

<style lang="scss" scoped>
  @import '@/assets/scss/main';
  @import '@blibli/blue-tokens/dist/blue-tokens.scss';

  .history-wrapper {
    display: flex;
    justify-content: space-between;

    .history-left{
      text-align: start;
      &__top{
        @include device(desktop) {
          font: $blu-title-2;
          margin-bottom: 4px;
        }
        @include device(tablet) {
          font: $blu-title-2;
          margin-bottom: 4px;
        }
        @include device(mobile) {
          font: $blu-subtitle-2;
          margin-bottom: 4px;
        }
      }

      &__bottom{
        @include device(desktop) {
          font: $blu-subtitle-2;
          color: rgba(0, 0, 0, 0.38);
        }
        @include device(tablet) {
          font: $blu-subtitle-2;
          color: rgba(0, 0, 0, 0.38);
        }
        @include device(mobile) {
          font: $blu-caption-1;
          color: rgba(0, 0, 0, 0.38);
        }
      }
    }

    .history-right{
      text-align: end;

      &__top{
        @include device(desktop) {
          font: $blu-title-2;
          font-weight: 600;
          margin-bottom: 4px;
        }
        @include device(tablet) {
          font: $blu-title-2;
          font-weight: 600;
          margin-bottom: 4px;
        }
        @include device(mobile) {
          font: $blu-subtitle-2;
          font-weight: 600;
          margin-bottom: 4px;
        }
      }

      &__bottom{
        @include device(desktop) {
          font: $blu-subtitle-2;
          color: rgba(0, 0, 0, 0.38);
        }
        @include device(tablet) {
          font: $blu-subtitle-2;
          color: rgba(0, 0, 0, 0.38);
        }
        @include device(mobile) {
          font: $blu-caption-1;
          color: rgba(0, 0, 0, 0.38);
        }
      }
    }
  }


  .carbon-offset-history {
    &__top{
      display: flex;
      justify-content: space-between;
      &__title{
        @include device(desktop) {
          font: $blu-title-2;
        }
        @include device(tablet) {
          font: $blu-title-2;
        }
        @include device(mobile) {
          font: $blu-subtitle-1;
        }
      }
    }
  }

</style>
