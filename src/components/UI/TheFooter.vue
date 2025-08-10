<template>
  <footer>
    <section class="footer-top">
      <img src="../../assets/images/logo-yellow.png" alt="logo" class="logo" />
      <div class="subscription">
        <p>Subscribe for news</p>
        <div class="buttons">
          <input type="text" placeholder="Type your email here" />
          <button>&#8680;</button>
        </div>
      </div>
    </section>
    <section class="footer-bottom"></section>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  /* height: 250px; */
  border: 1px solid #000;
  color: #fff;
}

.footer-top {
  /* temporary */
  display: flex;
  flex-flow: row wrap;
  /* justify-content: flex-start; */
  /* gap: 50px; */
  padding: 40px 100px;
  /* height: 150px; */
  background-color: #282828;
}

.subscription {
  display: flex;
  flex-flow: column wrap;
  margin-left: 35%;
}

.subscription p {
  font-size: 26px;
  font-weight: 600;
  line-height: 35px;
}

.buttons {
  background-color: #555;
  border-radius: 8px;
}

.subscription input,
.subscription button {
  border: none;
  outline: none;
  padding: 15px 22px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
}

.subscription input {
  font-weight: normal;
  color: #e2e2e2;
  background-color: #555;
}

.subscription input::placeholder {
  color: #e2e2e2;
}

.subscription button {
  /* height: 51px; */
  width: 60px;
  color: #000;
  background-color: #ffd700;
  border-radius: 8px;
}

.subscription button:hover {
  color: #555;
  background-color: #fff;
  cursor: pointer;
}

.footer-bottom {
  /* temporary */
  padding: 100px 40px;
  height: 250px;
  background-color: #000;
}
</style>
