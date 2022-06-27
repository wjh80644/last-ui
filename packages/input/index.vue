<template>
  <div>
    <input type="text" :value="modelValue" @input="input" />
  </div>
</template>

<script>
  export default {
    name: 'tInput'
  }
</script>

<script setup>

  const props = defineProps({
    modelValue: String | Number
  });
  const emit = defineEmits(["update:modelValue"]);
  const input = e => emit("update:modelValue",e.target.value)
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