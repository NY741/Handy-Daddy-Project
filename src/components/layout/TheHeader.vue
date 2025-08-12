<template>
  <header>
    <img src="../../assets/images/logo-yellow.png" alt="logo" class="logo" />
    <nav class="navigation">
      <ul class="nav-list">
        <li class="special-list-item">000-00-00</li>
        <li><router-link to="#" title="">Why us</router-link></li>
        <li><router-link to="#" title="">Services</router-link></li>
        <li><router-link to="#" title="">Appliances</router-link></li>
        <li><router-link to="#" title="">Blog</router-link></li>
        <li><router-link to="#" title="">Contact</router-link></li>
        <li class="special-list-item">
          <router-link to="#" title="">Join us</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: relative;
  height: 101px;
  padding: 30px 160px;
  border-bottom: 1px solid var(--main-color);
  color: #fff;
  background-color: #000;
}

.nav-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  font-size: 18px;
  line-height: 24px;
}

.nav-list a {
  color: #fff;
}

.nav-list a:hover {
  color: #ffd700;
  text-decoration: underline;
}

.special-list-item {
  color: #ffd700;
}

.special-list-item a {
  color: #ffd700;
}

.logo {
  position: absolute;
  left: 113px;
  bottom: -40%;
  z-index: 999;
  width: 133px;
  height: 109px;
}
</style>
