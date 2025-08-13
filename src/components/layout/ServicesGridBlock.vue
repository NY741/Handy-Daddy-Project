<template>
  <div :class="classes">
    <div>
      <router-link to="/appliance-repair-service">
        <img src="../../assets/images/services-icons/washer.svg" alt="washer" />
        <h6>Washer</h6>
      </router-link>
    </div>
    <div>
      <router-link to="/appliance-repair-service">
        <img src="../../assets/images/services-icons/dryer.svg" alt="dryer" />
        <h6>Dryer</h6>
      </router-link>
    </div>
    <div>
      <router-link to="/appliance-repair-service">
        <img
          src="../../assets/images/services-icons/freezer.svg"
          alt="freezer"
        />
        <h6>Freezer</h6>
      </router-link>
    </div>
    <div>
      <router-link to="/appliance-repair-service">
        <img
          src="../../assets/images/services-icons/refrigerator.svg"
          alt="refrigerator"
        />
        <h6>Refrigerator</h6>
      </router-link>
    </div>
    <div>
      <router-link to="/appliance-repair-service">
        <img
          src="../../assets/images/services-icons/oven-stove.svg"
          alt="oven-stove"
        />
        <h6>Oven, Stove</h6>
      </router-link>
    </div>
    <div class="highlighted">
      <router-link to="/appliance-repair-service">
        <img
          src="../../assets/images/services-icons/cooktop.svg"
          alt="cooktop"
        />
        <h6>Cooktop</h6>
      </router-link>
    </div>
    <div>
      <router-link to="/appliance-repair-service">
        <img src="../../assets/images/services-icons/ranges.svg" alt="ranges" />
        <h6>Ranges</h6>
      </router-link>
    </div>
    <div>
      <router-link to="/appliance-repair-service">
        <img
          src="../../assets/images/services-icons/dishwasher.svg"
          alt="dishwasher"
        />
        <h6>Dishwasher</h6>
      </router-link>
    </div>
  </div>
  <div class="centered margined">
    <base-button mode="white" link to="/">Call now</base-button>
  </div>
</template>

<script>
export default {
  props: ["class"],
  computed: {
    classes() {
      return "services-block " + this.class;
    },
  },
};
</script>

<style scoped>
.services-block {
  margin: 50px 244px 100px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 40px;
  column-gap: 40px;
  gap: 40px;
}

.services-block div {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 180px;
  padding: 20px;
  border: 1px solid var(--grey-color-2);
  border-radius: 5px;
}

.services-block div:hover {
  transform: scale(115%);
  box-shadow: 0 10.55px 21.1px 0 rgba(0, 0, 0, 0.1);
}

.services-block div.highlighted {
  background-color: var(--main-color);
  border-color: var(--main-color);
}

a {
  display: inline-block;
  text-align: center;
}

.services-block a img {
  /* width: 50%;
  height: 50%; */
  width: 40px;
  height: 50px;
}

h6 {
  margin: 15px 0 0 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.services-block.highlighted div {
  background-color: var(--main-color);
}
</style>
