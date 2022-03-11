<template>
  <div class="container blu">
    <div class="content-wrapper">
      <section class="content-section">
        <transition
                name="fade"
                mode="out-in"
        >
          <router-view />
        </transition>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/main';
  .content-wrapper {
    display: flex;
  }
  .content-section {
    width: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
