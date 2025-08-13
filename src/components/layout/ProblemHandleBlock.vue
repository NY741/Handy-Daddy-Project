<template>
  <section :class="classes">
    <div class="left-block">
      <h4>Is something wrong?</h4>
      <h3>We'll fix it!</h3>
    </div>
    <div></div>
    <div class="right-block flex-row">
      <div>
        <h4>Call now:</h4>
        <h3>(+000) 000 00 00</h3>
      </div>
      <div>
        <base-button :mode="mode === 'black' ? 'yellow' : 'black'"
          >Order Now</base-button
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["mode"],
  computed: {
    classes() {
      return "flex-row " + this.mode;
    },
  },
};
</script>

<style scoped>
section {
  justify-content: space-between;
  align-items: center;
  padding: 37px 80px;
  height: 177px;
  width: 100%;
  margin: 100px 0 60px 0;
  color: var(--black-color);
  background-color: var(--main-color);
}

section > div {
  justify-content: space-between;
  align-items: center;
  height: 103px;
  vertical-align: middle;
}

.left-block {
  width: 40%;
  border-right: 1px solid var(--black-color);
  vertical-align: middle;
}

.right-block {
  width: 50%;
}

h4 {
  margin: 0 0 20px 0;
  font-weight: 400;
  font-size: 25px;
  line-height: 24px;
}

h3 {
  margin: 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 24px;
}

.black {
  color: var(--main-color);
  background-color: var(--black-color);
}
</style>
