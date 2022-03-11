<template>
  <div class="project-section">
    <div class="project-section__top">
      <div class="project-section__top__title">
        {{ $t('cinta-bumi.project-header') }}
      </div>
      <div class="leaf-logo">
        <img src="@/assets/images/icons/leaf-green.png"/>
      </div>
    </div>

    <BliCard class="bli-card-normal" no-shadow>
      <BliCardContent class="bli-card-project-wrapper">
        <div class="bli-card-project-wrapper__address">
          <div class="bli-card-project-wrapper__city">
            {{city}}
          </div>
          <div class="bli-card-project-wrapper__street">
            {{streetName}}
          </div>
        </div>
        <div class="bli-card-project-wrapper__progress-bar">
          <div class="asset-allocation__bar-container">
            <div class="bar-container__fill"
                :style="`width: ${assetPercentage(percent1)}`" v-if="percent1 !== 0"
            />
            <div class="bar-container__empty"
                :style="`width: ${assetPercentage(percent2)}`" v-if="percent2 !== 0"
            />
          </div>
        </div>
        <div class="bli-card-project-wrapper__progress-bar-info">
          <span class="trees">
            {{numberTreesPlanted}}
          </span> {{ $t('cinta-bumi.project-deadline') }} <span class="deadline">
            {{deadline}}</span>
        </div>
      </BliCardContent>
    </BliCard>
</div>
</template>

<script src="./js/project-section.js"></script>

<style lang="scss" scoped>
  @import '@/assets/scss/main';
  @import '@blibli/blue-tokens/dist/blue-tokens.scss';

  .bli-card-normal{
    margin-bottom: 16px;
  }

  .project-section {
    &__top{
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      .leaf-logo{
        width: 24px;
        height: 24px;
      }

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

  .bli-card-project-wrapper {
    &__city {
      @include device(desktop) {
        font: $blu-title-2;
        margin-bottom: 2px;
      }
      @include device(tablet) {
        font: $blu-title-2;
        margin-bottom: 2px;
      }
      @include device(mobile) {
        font: $blu-subtitle-2;
        margin-bottom: 2px;
      }
    }
    &__street {
      @include device(desktop) {
        font: $blu-title-2;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2px;
      }
      @include device(tablet) {
        font: $blu-title-2;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2px;
      }
      @include device(mobile) {
        font: $blu-subtitle-2;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2px;
      }
    }

    &__progress-bar-info{
      @include device(desktop) {
        font: $blu-title-2;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2px;
        .trees{
          color: #0095DA;
        }
        .deadline{
          color: #0095DA;
        }
      }
      @include device(tablet) {
        font: $blu-title-2;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2px;
        .trees{
          color: #0095DA;
        }
        .deadline{
          color: #0095DA;
        }
      }
      @include device(mobile) {
        font: $blu-subtitle-2;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2px;
        .trees{
          color: #0095DA;
        }
        .deadline{
          color: #0095DA;
        }
      }
    }

  }

  .asset-allocation {
    max-width: 612px;
    height: auto;
    border: 2px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 16px;
    font-weight: normal;
    background-color: #FFFFFF;


    &__bar-container {
      display: flex;
      height: 8px;
      margin: 8px 0;
      border-radius: 100px;
      div:first-child {
        border-radius: 100px;
      }
      div:last-child {
        border-radius: 0 100px 100px 0;
      }
      div:only-child {
        border-radius: 100px;
      }

      .bar-container__fill {
        background-color: #0095DA;
      }
      .bar-container__empty {
        background-color: #F1F1F1;
      }
    }
  }
</style>
