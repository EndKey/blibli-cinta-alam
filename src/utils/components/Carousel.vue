<template>
  <div class="container">
    <div ref="carouselContainer" class="carousel-container">
      <div ref="items" :class="[{ moving: !circular }, 'items']">
        <div v-for="(item, index) in renderedContent" :key="index"
             class="slider-item" :style="'width:' + 100 / perPage + '%'">
          <template v-if="itemVisible[index]">
            <slot name="item" :item="item" :index="index" />
          </template>
        </div>
      </div>
    </div>
    <Pagination
      v-if="pagination"
      :max-page="slideCount"
      :active-page="activePage"
      @nav-clicked="navigateTo"
    />
    <div v-if="navigation" class="navigation">
      <div v-if="visibleNext" class="nav-button nav-button--right"
           @click="navigateTo(activePage + 1, $event)">
           <BliIconChevronRight fill="#0095DA"/>
      </div>
      <div v-if="visiblePrev" class="nav-button nav-button--left"
        @click="navigateTo(activePage - 1, $event)">
           <BliIconChevronLeft fill="#0095DA"/>
      </div>
    </div>
  </div>
</template>

<script src="./js/carousel.js"></script>

<style lang="scss" scoped>
@import "@/assets/scss/main";
.container {
  width: 100%;
  position: relative;
}

.carousel-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .items {
    height: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;
    margin: 10px auto;
    width: 51%;
    @include device(mobile) {
      width: 100%;
      max-width: 400px;
    }

    &.moving {
      transition: transform 0.2s ease-out;
    }

    .slider-item {
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
    }
  }

  .nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    top: calc(50% - 25px);
    cursor: pointer;

    &--left {
      left: -15px;
    }

    &--right {
      right: -15px;
    }
  }
}
</style>
