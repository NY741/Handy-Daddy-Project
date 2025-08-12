<template>
  <background-with-title
    :titles="titleData"
    height="narrow"
    buttons
    imageOrder="2"
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
        { text: "Refrigerator", isHighlighted: true },
        { text: "Repair", isHighlighted: false },
      ],
    };
  },
};
</script>
