<template>
  <div class="carbon-footprint-card">
    <BliCard class="bli-card-blue" no-shadow>
      <BliCardContent>
        <div class="bli-card-blue__wrapper">
          <div class="bli-card-blue__wrapper__info">
            <div class="total-carbon-footprint">
              <div class="top-info">
                <div>Total average carbon footprint in </div>
                <img class="ind-logo" src="@/assets/images/icons/ind.png"/>
              </div>
              <strong>3,7 Tons</strong>
            </div>
            <div class="total-tree-planted">
              <div>Number of trees that you've planted</div>
              <strong>1 tree(s)</strong>
            </div>
            <div class="tree-info">
              <div class="tree-info__text">≈ offset to <span style="font-weight:bold;">21.77 Kg</span> of Carbon Dioxide</div>
              <div class="tree-info__info-icon" @click="openModalCalculationInfo">
                <BliIconInformation></BliIconInformation>
              </div>
            </div>
          </div>
          <div>
            <img src="@/assets/images/icons/mr-blibli-2.png"/>
          </div>
        </div>

        <BliModal type="page" :bli-active.sync="visibleModalCalculationInfo" @maskClick="visibleModalCalculationInfo = false"
                  @close="closeModalCalculationInfo" no-button>
          <BliModalHeader>
            <div class="modal-header">Calculation</div>
          </BliModalHeader>
          <BliModalBody>
            <div class="modal-body">
              <div class="modal-body-calculation-info">
                The annual CO2 off setting rate varies from 21.77 kgCO2/tree to 31.5 kgCO2/tree. To compensate 1 tonne of CO2, 31 to 46 trees are needed.
              </div>
              <BliCard class="bli-card-grey-light" no-shadow>
                <BliCardContent class="modal-body-calculation-info-2">
                  Carbon footprint calculation and mangrove absorption value will be adjusted with reference from IPCC and Indonesian goverment regulations.
                </BliCardContent>
              </BliCard>
            </div>
          </BliModalBody>
        </BliModal>
      </BliCardContent>
    </BliCard>
</div>
</template>

<script src="./js/carbon-footprint-card.js"></script>

<style lang="scss" scoped>
  @import '@/assets/scss/main';
  @import '@blibli/blue-tokens/dist/blue-tokens.scss';
  svg {
    transform: scale(.75);
    fill: #0095DA;
  }

  .modal-body-calculation-info {
    margin-bottom: 10px;
  }
  .modal-body-calculation-info-2 {
    padding: 10px;
  }
  .modal-body {
    line-height: 1.5em;
  }
  .bli-card-grey-light {
    background: #F1F1F1;
  }
  .carbon-footprint-card{
    margin-bottom: 16px;

    .bli-card-blue {
      background: #DAF3FF;
      &__wrapper{
        @include device(desktop) {
          display: flex;
          justify-content: space-between;
          padding-left: 32px;
        }
        @include device(tablet) {
          display: flex;
          justify-content: space-between;
        }
        @include device(mobile) {
          display: flex;
          justify-content: space-between;
        }

        &__info {
          @include device(desktop) {
            display: flex;
          }
        }
      }

      .blu-card__content{
        padding: 16px;
      }
    }

    .total-carbon-footprint {
      @include device(desktop) {
        font: $blu-title-2;
        line-height: 24px;
        margin-bottom: 16px;
        margin-right: 24px;
      }
      @include device(tablet) {
        font: $blu-title-2;
        line-height: 20px;
        margin-bottom: 16px;
      }
      @include device(mobile) {
        font: $blu-subtitle-2;
        line-height: 20px;
        margin-bottom: 16px;
      }
    }
    .top-info{
      display: flex;
      justify-content: space-between;
      .ind-logo{
        width: 16px;
        height: 16px;
        margin-left: 8px;
      }
    }

    .total-tree-planted {
      @include device(desktop) {
        font: $blu-title-2;
        line-height: 24px;
        margin-bottom: 8px;
        margin-right: 24px;
      }
      @include device(tablet) {
        font: $blu-title-2;
        line-height: 20px;
        margin-bottom: 8px;
      }
      @include device(mobile) {
        font: $blu-subtitle-2;
        line-height: 20px;
        margin-bottom: 8px;
      }
    }

    .tree-info {
      display: flex;
      align-items: center;

      &__text {
        @include device(desktop) {
          font: $blu-caption-1;
          color: rgba(0, 0, 0, 0.6);
        }
        @include device(tablet) {
          font: $blu-caption-1;
          color: rgba(0, 0, 0, 0.6);
        }
        @include device(mobile) {
          font: $blu-caption-1;
          color: rgba(0, 0, 0, 0.6);
        }
      }

      &__info-icon {
        cursor: pointer;
      }
    }
  }
</style>
