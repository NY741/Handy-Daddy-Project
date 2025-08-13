<template>
  <background-with-title
    :titles="titleData"
    height="narrow"
    buttons
    imageOrder="0"
  >
  </background-with-title>
  <base-header subText="we proudly provide these services"
    >Home Appliances</base-header
  >
  <services-grid-block class="highlighted"> </services-grid-block>
  <problem-handle-block mode="black"></problem-handle-block>
</template>

<script>
import BackgroundWithTitle from "@/components/layout/BackgroundWithTitle.vue";
import ServicesGridBlock from "@/components/layout/ServicesGridBlock.vue";
import ProblemHandleBlock from "@/components/layout/ProblemHandleBlock.vue";

export default {
  components: {
    BackgroundWithTitle,
    ServicesGridBlock,
    ProblemHandleBlock,
  },
  data() {
    return {
      titleData: [
        { text: "Home", isHighlighted: false },
        { text: "Appliances", isHighlighted: true },
      ],
    };
  },
};
</script>
