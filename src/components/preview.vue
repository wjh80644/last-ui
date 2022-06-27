<template>
  <div class="pre-code-box">
    <!-- <span class="m-copy" v-if="showCode" @click="copyCode">
      <i class="m-icon-copy"></i> -->
    <!-- </span> -->
    <div>
      <pre class="language-html" v-if="showCode"><code>{{sourceCode}}</code></pre>
    </div>
    <!-- <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "隐藏代码" : "显示代码"}}</span>
      <i class="m-icon-code"></i>
    </div> -->
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  const props = defineProps({
    compName: {
      type: 'String',
      default: '',
      require: true
    },
    demoName: {
      type: 'String',
      default: '',
      require: true,
    }
  })
  // const showCode = ref(false)
  const border = ref('')
  const showOrhideCode = () => {
    showCode.value = !showCode.value;
    if (showCode.value) {
      border.value = 0;
    } else {

    }
  }
  const sourceCode = ref('')
  async function getSourceCode() {
    // const isDev = import.meta.env.MODE === 'development';
      sourceCode.value = (await import( /* @vite-ignore */`/packages/${props.compName}/doc/${props.demoName}.vue?raw`)).default;
    // if (isDev) {
    // } else {
    //   sourceCode.value = await fetch(`/packages/${props.compName}/doc/${props.demoName}.vue`).then((res) => res.text())
    // }
  }
  onMounted(() => {
    getSourceCode()
  })
</script>

<style scoped>

</style>