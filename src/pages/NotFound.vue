<template>
  <background-with-title
    :titles="titleData"
    height="middle"
    imageOrder="3"
  >
  </background-with-title>
  <base-header>Don't be sad! these services are still available</base-header>
  <services-grid-block class="highlighted"></services-grid-block>
  <problem-handle-block mode="black"></problem-handle-block>
</template>

<script>
import BackgroundWithTitle from "@/components/layout/BackgroundWithTitle.vue";
import ProblemHandleBlock from "@/components/layout/ProblemHandleBlock.vue";
import ServicesGridBlock from "@/components/layout/ServicesGridBlock.vue";

export default {
  components: {
    BackgroundWithTitle,
    ServicesGridBlock,
    ProblemHandleBlock,
  },
  data() {
    return {
      titleData: [
        { text: "", isHighlighted: false },
      ],
    };
  },
};
</script>
