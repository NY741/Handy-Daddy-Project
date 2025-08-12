<template>
  <main>
    <slot></slot>
    <problem-handle-block></problem-handle-block>
  </main>
</template>

<script>
import ProblemHandleBlock from "./ProblemHandleBlock.vue";

export default {
  components: {
    ProblemHandleBlock,
  },
};
</script>

<style scoped>
main {
  min-height: 400px;
}
</style>
