---
home: true
sidebar: false
heroImage: ''
---

<style scoped>
/* This <style scoped> applies ONLY to this page */
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('/Background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 0;
}

.hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0,0,0,0.7);
  z-index: 1;
  pointer-events: none;
}

.hero-text {
  pointer-events: auto;
}
</style>

<div class="home-page"></div>
<div class="hero">
  <div class="hero-text">Fablab 2025</div>
</div>