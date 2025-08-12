<template>
  <div class="background" :style="{ backgroundImage: `url(${bgUrl})` }">
    <section :class="height">
      <h1>
        <span
          v-for="title in titles"
          :class="title.isHighlighted ? 'highlight' : ''"
          :key="title.text"
          >{{ title.text }}</span
        >
      </h1>
      <div v-if="buttons" class="buttons flex-row">
        <base-button mode="yellow wide-button">Call now</base-button>
        <base-button mode="white wide-button">Order now</base-button>
      </div>
    </section>
  </div>
</template>

<script>
import bg1 from "../../assets/images/bg-main-01.png";
import bg2 from "../../assets/images/bg-main-02.png";
import bg3 from "../../assets/images/bg-main-03.png";

export default {
  props: {
    titles: {
      type: Array,
      required: true,
    },
    height: {
      type: String,
      required: true,
      default: "narrow",
    },
    buttons: {
      type: Boolean,
      default: false,
    },
    imageOrder: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      images: [
        {
          url: bg1,
        },
        {
          url: bg2,
        },
        {
          url: bg3,
        },
      ],
    };
  },
  computed: {
    bgUrl() {
      return this.images[+this.imageOrder].url;
    },
  },
};
</script>

<style scoped>
.background {
  /* background-image: url("../../assets/images/bg-main-01.png"); */
  position: relative;
  background-position-y: 70%;
  text-align: center;
}

.background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #000000;
  opacity: 0.8;
}

section {
  transform: translateY(30%);
}

h1 {
  /* max-width: 1000px; */
  margin: 0 auto 30px;
  font-weight: 700;
  font-size: 64px;
  line-height: 100%;
  letter-spacing: -2.5%;
  text-transform: uppercase;
}

span {
  display: inline-block;
  margin-left: 1rem;
  color: var(--white-color);
}

.highlight {
  color: var(--main-color);
}

.narrow {
  height: 374px;
}

.wide {
  height: 621px;
}

.flex-row {
  justify-content: center;
  gap: 3rem;
}
</style>
