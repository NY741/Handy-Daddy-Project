<template>
  <footer>
    <section class="footer-top">
      <div class="left-block">
        <img
          src="../../assets/images/logo-yellow.png"
          alt="logo"
          class="logo"
        />
      </div>
      <div class="right-block">
        <p>Subscribe for news</p>
        <div class="buttons">
          <input type="text" placeholder="Type your email here" />
          <button>🡲</button>
        </div>
      </div>
    </section>

    <section class="footer-bottom">
      <div class="left-block">
        <div>
          <h4>Rate us on</h4>
          <img src="../../assets/images/logo-google-footer.svg" alt="Google" />
        </div>
        <div>
          <base-button mode="yellow">Call now</base-button>
        </div>
        <div class="icons">
          <img src="../../assets/images/icon-fb-white.svg" alt="facebook" />
          <img
            src="../../assets/images/icon-youtube-yellow.svg"
            alt="youtube"
          />
          <img
            src="../../assets/images/icon-linkedin-white.svg"
            alt="linkedin"
          />
        </div>
      </div>
      <div class="right-block navigation">
        <div class="footer-menu flex-row">
          <div class="vertical-menu">
            <h4>Rate us on</h4>
            <a href="#" title="#">Why us</a>
            <a href="#" title="#">Services</a>
            <a href="#" title="#">Join us</a>
            <a href="#" title="#">contact</a>
          </div>
          <div class="vertical-menu">
            <h4>Legal</h4>
            <a href="#" title="#">Terms & Conditions</a>
            <a href="#" title="#">Privacy policy</a>
            <a href="#" title="#">Refund policy</a>
            <a href="#" title="#">FAQs</a>
          </div>
          <div class="vertical-menu">
            <h4>Get in Touch with Us</h4>
            <a href="#" title="#"
              >1609 Yonge Street, Toronto, Ontario, Canada</a
            >
            <a href="#" title="#">(+1) 997 962 87 2</a>
            <a href="mailto:info@handydaddy.ca" title="#">info@handydaddy.ca</a>
          </div>
        </div>
        <div>
          <img
            src="../../assets/images/logo-people-brand.svg"
            alt="People Brand"
          />
        </div>
      </div>
    </section>

    <section class="copyright">
      © 2022 Handy Daddy | All right reserved.
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  border: 1px solid #000;
  color: #fff;
}

.footer-top {
  border-bottom: 1px solid #ffd700;
  background-color: #282828;
}

.footer-top,
.footer-bottom {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
}

.logo {
  width: 30%;
  height: 30%;
  min-width: 150px;
  min-height: 100px;
}

.left-block {
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  width: 40%;
  /* border: 1px solid red; */
}

.right-block {
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-start;
  /* border: 1px solid red; */
}

.right-block.navigation {
  gap: 68px;
}

.right-block p {
  margin-top: 0;
  font-size: 26px;
  font-weight: 600;
  line-height: 35px;
}

.buttons {
  background-color: #555;
  border-radius: 8px;
}

.right-block input,
.right-block button {
  border: none;
  outline: none;
  padding: 12px 15px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
}

.right-block input {
  font-weight: normal;
  color: #e2e2e2;
  background-color: #555;
}

.right-block input::placeholder {
  color: #e2e2e2;
}

.right-block button {
  width: 60px;
  color: #000;
  background-color: #ffd700;
  border-radius: 8px;
}

.right-block button:hover {
  color: #555;
  background-color: #fff;
  cursor: pointer;
}

.footer-bottom {
  align-items: flex-start;
  background-color: #000;
}

.footer-bottom h4 {
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #ffd700;
}

.footer-bottom .left-block div:nth-of-type(1),
.footer-bottom .left-block div:nth-of-type(2) {
  margin-left: 6%;
}

.footer-menu.flex-row {
  gap: 2rem;
}

.vertical-menu {
  min-width: 80px;
  max-width: 200px;
  display: flex;
  flex-flow: column wrap;
  gap: 8px;
  /* border: 1px solid #fff; */
}

.vertical-menu a,
.vertical-menu a:visited {
  color: #fff;
}

.vertical-menu a:hover,
.vertical-menu a:active {
  color: #ffd700;
}

.copyright {
  padding: 30px;
  height: 77px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -2%;
  color: #8d8d8d;
  background-color: #282828;
  text-align-last: center;
}
</style>
