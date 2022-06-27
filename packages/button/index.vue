<template>
  <div :class="tClass">
    <button ><slot></slot></button>
  </div>
</template>

<script>
  export default {
    name: 'tButton'
  }
</script>

<script setup>
import { computed } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'default'
    }
  });
  const tClass = computed(()=>{
    return ['t-button', props.type == 'default' ? 't-button-default': `t-button-${props.type}`];
  })
</script>

<style lang="scss" scoped>
  button {
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
  }
  .t-button {
    button {
      padding: 12px 24px;
      border-radius: 4px;
      border: 1px solid #b4b0b0
    }
  }
  .t-button-default {
    button {
      background: #b4b0b0;
    }

  }
  .t-button-success {
    button {
      background: #0eac77;
    }
  }
</style>