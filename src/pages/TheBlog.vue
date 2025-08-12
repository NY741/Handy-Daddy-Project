<template>
  <problem-handle-block></problem-handle-block>
</template>

<script>
import BackgroundWithTitle from "@/components/layout/BackgroundWithTitle.vue";
import ProblemHandleBlock from "@/components/layout/ProblemHandleBlock.vue";

export default {
  components: {
    ProblemHandleBlock,
  },
  data() {
    return {
      titleData: [
        { text: "We'll", isHighlighted: false },
        { text: "Fix it", isHighlighted: true },
      ],
    };
  },
};
</script>
