<template>
  <background-with-title
    :titles="titleData"
    height="narrow"
    buttons
    imageOrder="0"
  >
  </background-with-title>
  <base-header>Installation must makes & models:</base-header>
  <services-grid-block>
  </services-grid-block>
</template>

<script>
import BackgroundWithTitle from "@/components/layout/BackgroundWithTitle.vue";
import ServicesGridBlock from "@/components/layout/ServicesGridBlock.vue";

export default {
  components: {
    BackgroundWithTitle,
    ServicesGridBlock,
  },
  data() {
    return {
      titleData: [
        { text: "Appliance", isHighlighted: false },
        { text: "Installation", isHighlighted: true },
        { text: "Service", isHighlighted: false },
      ],
    };
  },
};
</script>

<style scoped>

</style>
