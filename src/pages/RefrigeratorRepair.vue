<template>
  <background-with-title
    :titles="titleData"
    height="narrow"
    buttons
    imageOrder="2"
  >
  </background-with-title>
  <base-header subText="we proudly provide these services"
    >Refrigerator</base-header
  >
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
        { text: "Refrigerator", isHighlighted: true },
        { text: "Repair", isHighlighted: false },
      ],
    };
  },
};
</script>
