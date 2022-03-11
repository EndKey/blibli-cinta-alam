<template>
  <span>
    <!--we make 1 line code to prevent whitespace between span-->
    <span class="hours" v-if="hours">{{hours}}{{separator}}</span><span class="minutes" v-if="minutes">{{minutes}}{{separator}}</span><span class="seconds">{{seconds}}</span>
  </span>
</template>

<script src="./js/count-down.js"></script>
