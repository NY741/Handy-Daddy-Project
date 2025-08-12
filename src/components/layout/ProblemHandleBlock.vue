<template>
  <section class="flex-row">
    <div class="left-block">
      <h4>Is something wrong?</h4>
      <h3>We'll fix it!</h3>
    </div>
    <div>

    </div>
    <div class="right-block flex-row">
      <div>
        <h4>Call now:</h4>
        <h3>(+000) 000 00 00</h3>
      </div>
      <div>
        <base-button mode="black">Order Now</base-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  justify-content: space-between;
  align-items: center;
  padding: 37px 80px;
  height: 177px;
  width: 100%;
  margin: 100px 0;
  color: var(--black-color);
  background-color: var(--main-color);
}

section > div {
  justify-content: space-between;
  align-items: center;
  height: 103px;
  /* border: 1px solid red; */
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
</style>
