<template>
  <background-with-title
    :titles="titleData"
    height="wide"
    buttons
    imageOrder="0"
  >
  </background-with-title>
  <problem-handle-block></problem-handle-block>
</template>

<script>
import BackgroundWithTitle from "@/components/layout/BackgroundWithTitle.vue";
import ProblemHandleBlock from "@/components/layout/ProblemHandleBlock.vue";

export default {
  components: {
    BackgroundWithTitle,
    ProblemHandleBlock
  },
  data() {
    return {
      titleData: [
        { text: "Why", isHighlighted: false },
        { text: "Us", isHighlighted: true },
      ],
    };
  },
};
</script>
