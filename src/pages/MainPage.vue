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
        { text: "We'll", isHighlighted: false },
        { text: "Fix it", isHighlighted: true },
      ],
    };
  },
};
</script>
