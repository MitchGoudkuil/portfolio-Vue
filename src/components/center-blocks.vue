<template>
  <section class="center-block">
    <router-link class="design item" to="/design">
      <div class=""><h3>Design</h3></div>
    </router-link>

    <router-link class="photography item" to="/photography">
      <div class=""><h3>Photography</h3></div>
    </router-link>

    <router-link class="frontend item" to="/frontend">
      <div class=""><h3>Frontend</h3></div>
    </router-link>
    <div class="rect"></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.center-block {
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
  }
}

.rect {
  position: absolute;
  z-index: -1;
  width: 800px;
  height: 200px;
  overflow: hidden;
  background: gray url(../assets/stripes-darker.svg) repeat 0 0;
  background-size: 30px;
  -webkit-animation: slide 10s linear infinite;
}

@-webkit-keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -300px 0;
  }
}

.design {
  position: relative;
  height: 70%;
  width: 100%;
  background-image: url("../assets/design.png");
  background-size: cover;
  background-position: center;
}

.item {
  position: relative;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    position: relative;
    z-index: 100;
    color: #fff;
    opacity: 1;
    transition: 0.5s;
  }

  &:hover {
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);

    h3 {
      opacity: 1;
    }

    &::after {
      opacity: 0.8;
      background-color: #9744fa;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.4s;
    background-color: #000;
    opacity: 0.2;
  }
}

.photography {
  height: 90%;
  width: 100%;
  margin: 0 1rem;
  background-image: url("../assets/robin.jpg");
  background-size: cover;
  background-position: center;
}

.frontend {
  height: 80%;
  width: 100%;
  background-image: url("../assets/code.png");
  background-size: cover;
  background-position: center;
}

@media only screen and (min-width: 600px) {
  .center-block {
    width: 60vw;
    height: 60vh;
  }
}

@media only screen and (min-width: 800px) {
  .center-block {
    width: 55vw;
    height: 65vh;
  }
  .item {
    h3 {
      opacity: 1;
    }
  }
}

@media only screen and (min-width: 1000px) {
  .center-block {
    width: 30vw;
    height: 75vh;
  }

  .item {
    h3 {
      opacity: 0;
    }

    &:hover {
      -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);

      h3 {
        opacity: 1;
      }

      &::after {
        opacity: 0.8;
        background-color: #9744fa;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.4s;
      background-color: rgba(0, 0, 0, 0);
      opacity: 0;
    }
  }
}
</style>
