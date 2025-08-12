<template>
  <background-with-title
    :titles="titleData"
    height="wide"
    buttons
    imageOrder="0"
  >
  </background-with-title>
</template>

<script>
import BackgroundWithTitle from "@/components/layout/BackgroundWithTitle.vue";

export default {
  components: {
    BackgroundWithTitle,
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
