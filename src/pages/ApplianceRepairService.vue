<template>
  <background-with-title
    :titles="titleData"
    height="wide"
    buttons
    imageOrder="0"
  >
  </background-with-title>
  <base-header>Installation must makes & models:</base-header>
  <services-grid-block> </services-grid-block>
  <problem-handle-block></problem-handle-block>
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
        { text: "Appliance", isHighlighted: false },
        { text: "Repair", isHighlighted: true },
        { text: "Service", isHighlighted: false },
      ],
    };
  },
};
</script>
