<template>
  <button v-if="!link" :class="mode"><slot></slot></button>
  <router-link v-else :to="to" :class="mode"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
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
  /* color: #00a88d;
  background-color: #fff;
  border-color: #00a88d; */
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

.black {
  border-color: var(--black-color);
  background-color: var(--black-color);
  color: var(--main-color);
}

.black:hover,
.black:active {
  border: 1px solid var(--dark-color-2);
  background-color: var(--dark-color-2);
}

/* 
.flat {
  display: inline;
  padding: 0;
  color: #ffd700;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  color: #063;
  background-color: #ddffee;
  border-color: #063;
}

.arrow-signed::after {
  content: " ->";
  font-weight: bold;
} */
</style>
