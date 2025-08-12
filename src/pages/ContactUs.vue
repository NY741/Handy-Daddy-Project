<template>
  <background-with-title
    :titles="titleData"
    height="narrow"
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
        { text: "Contact", isHighlighted: false },
        { text: "Us", isHighlighted: true },
      ],
    };
  },
};
</script>
