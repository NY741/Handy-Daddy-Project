<template>
  <div class="caption">
    <h3><slot></slot></h3>
    <h4 v-if="subText">{{ subText }}</h4>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: ["subText"],
};
</script>

<style scoped>
.caption {
  margin: 50px auto;
  text-align: center;
}

h3 {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0;
  text-transform: uppercase;
}

h4 {
  margin:0 0 20px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0;
  text-transform: capitalize;
}

.line {
  margin: 0 auto;
  height: 4px;
  width: 158px;
  background-color: var(--main-color);
}
</style>
