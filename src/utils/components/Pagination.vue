<template>
  <div class="pagination-container">
    <div
      v-for="i in maxPage"
      :key="i"
      class="pagination__nav"
      :class="{ 'pagination__nav--active': i - 1 === activePage }"
      @click="handleClick(i)"
    />
  </div>
</template>

<script src="./js/pagination.js"></script>

<style lang="scss" scoped>
$base-color: #000000;
$active-color: rgb(0, 149, 218);
@import "~@blibli/dls/src/assets/scss/utils/variable";
@import "~@blibli/dls/src/assets/scss/mixins/responsive";

.pagination-container {
  margin-top: -6px;
  margin-left: 3%;
  z-index: 2;

  @include desktop {
    margin: 0;
    position: absolute;
    bottom: 25px;
    left: calc(25% + 20px);
  }
}
.pagination__nav {
  height: 10px;
  width: 10px;
  display: inline-block;
  margin: 0 2px;
  background-color: $base-color;
  opacity: 0.24;
  border-radius: 10px;
  transition: width 0.1s ease-out;
  cursor: pointer;

  &--active {
    width: 25px;
    opacity: 1;
    background-color: $active-color;
  }
}
</style>
