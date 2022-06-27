<template>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
import { tButton } from 'last-ui';
const val = ref('')
// console.log(tButton)
</script>

<style lang="scss">
  html,body {
    margin: 0;
    padding: 0;
  }
</style>