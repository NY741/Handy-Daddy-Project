<template>
  <the-header></the-header>
  <main-content>
    <router-view></router-view>
  </main-content>
  <the-footer></the-footer>
</template>

<script>
import MainContent from "./components/UI/MainContent.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import TheHeader from "./components/UI/TheHeader.vue";

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

.hidden {
  display: none;
}

.block {
  display: block;
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
