<template>
  <div :class="classes" :style="{ backgroundImage: `url(${bgUrl})` }">
    <section :class="height">
      <h1>
        <span
          v-for="title in titles"
          :class="title.isHighlighted ? 'highlight' : ''"
          :key="title.text"
          >{{ title.text }}</span
        >
      </h1>
      <base-header v-if="imageOrder === 3"
        >Sorry, the page doesn't exist</base-header
      >
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
import notFound from "../../assets/images/bg-not-found.png";

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
        {
          url: notFound,
        },
      ],
    };
  },
  computed: {
    bgUrl() {
      return this.images[+this.imageOrder].url;
    },
    classes() {
      return "background " + (this.imageOrder === "3" ? "not-found" : "");
    },
  },
};
</script>

<style scoped>
.background {
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

.not-found {
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--grey-color-3);
}

.not-found::before {
  content: "";
  position: absolute;
  inset: 0;
  /* background-color: var(--grey-color-3); */
  opacity: 0;
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

.middle {
  height: 458px;
}

.wide {
  height: 621px;
}

.flex-row {
  justify-content: center;
  gap: 3rem;
}
</style>
