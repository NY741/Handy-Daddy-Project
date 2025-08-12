<template>
  <button v-if="!link" :class="mode"><slot></slot></button>
  <router-link v-else :to="to" :class="mode"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    mode: {
      // type: String,
      type: Object,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  display: inline-block;
  padding: 0.8rem 2.5rem;
  border: 1px solid transparent;
  font: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
}

a:hover,
a:active,
button:hover,
button:active {
}

.outline {
  border-color: var(--main-color);
  background-color: var(--white-color);
  color: var(--main-color);
}

.yellow {
  border-color: var(--main-color);
  background-color: var(--main-color);
  color: var(--black-color);
}

.yellow:hover,
.yellow:active {
  border: 1px solid var(--secondary-color);
  background-color: var(--secondary-color);
}

.white {
  border-color: var(--black-color);
  background-color: var(--white-color);
  color: var(--black-color);
}

.white:hover,
.white:active {
  background-color: var(--grey-color-1);
}

.black {
  border-color: var(--black-color);
  background-color: var(--black-color);
  color: var(--main-color);
}

.black:hover,
.black:active {
  border: 1px solid var(--black-color);
  background-color: var(--main-color);
  color: var(--black-color);
}

.wide-button {
  min-width: 150px;
  padding: 0.8rem 3.5rem;
}
</style>
