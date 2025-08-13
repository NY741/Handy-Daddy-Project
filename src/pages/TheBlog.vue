<template>
  <background-with-title></background-with-title>
  <problem-handle-block></problem-handle-block>
</template>

<script>
import BackgroundWithTitle from "@/components/layout/BackgroundWithTitle.vue";
import ProblemHandleBlock from "@/components/layout/ProblemHandleBlock.vue";

export default {
  components: {
    BackgroundWithTitle,
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
