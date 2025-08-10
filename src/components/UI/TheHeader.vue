<template>
  <header>
    <img src="../../assets/images/logo-yellow.png" alt="logo" class="logo" />
    <nav class="navigation">
      <ul class="nav-list">
        <li class="special-list-item">000-00-00</li>
        <li><a href="#" title="">Why us</a></li>
        <li><a href="#" title="">Services</a></li>
        <li><a href="#" title="">Appliances</a></li>
        <li><a href="#" title="">Blog</a></li>
        <li><a href="#" title="">Contact</a></li>
        <li class="special-list-item"><a href="#" title="">Join us</a></li>
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
  padding: 30px 50px;
  border: 1px solid #000;
  color: #fff;
  background-color: #000;
}

.nav-list {
  margin-left: 25%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  border: 1px solid #FFD700;
  font-size: 0.8rem;
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
  left: 0;
  bottom: -40%;
  width: 133px;
  height: 109px;
  margin-left: 30px;
}
</style>
