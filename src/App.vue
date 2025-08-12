<template>
  <div class="container">
    <the-header></the-header>
    <main-content>
      <router-view></router-view>
    </main-content>
    <the-footer></the-footer>
  </div>
</template>

<script>
import MainContent from "./components/layout/MainContent.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
    MainContent,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");

:root {
  --main-color: #ffd700;
  --secondary-color: #fe6;
  --white-color: #fff;
  --black-color: #000;
  --dark-color-1: #231f20;
  --dark-color-2: #282828;
  --dark-color-3: #343434;
  --dark-color-4: #4f4f4f;
  --grey-color-1: #c4c4c4;
}

* {
  box-sizing: border-box;
}

html {
  /* font-family: "Roboto", sans-serif; */
  /* font-family: "Poppins", sans-serif; */
  font-family: "Work Sans", sans-serif;
}

body {
  margin: 0;
  /* background-color: #f8f8f8; */
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  border: 1px solid var(--black-color);
}

h2 {
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: -2%;
}

h5 {
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -2%;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

.success {
  color: #093 !important;
}

.success-bg {
  background-color: #eeffee !important;
}

.danger {
  color: #d30 !important;
}

.danger-bg {
  background-color: #ffeeee !important;
}

.centered {
  text-align: center;
}

.margined {
  margin: 60px 0;
}

.hidden {
  display: none;
}

.block {
  display: block;
}

.flex-row {
  display: flex;
  flex-flow: row wrap;
}

.flex-column {
  display: flex;
  flex-flow: column wrap;
}

.bottom-block {
  margin-bottom: 0;
  padding-bottom: 0;
}

.route-enter-from {
  opacity: 0;
  background-color: #eef;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  background-color: #fff;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
