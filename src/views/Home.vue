<template>
  <div class="home">
    <img class="clouds one" :src="require(`@/assets/back-1.svg`)" alt="" />
    <img class="tree" :src="require(`@/assets/tree.svg`)" alt="" />

    <img class="clouds two" :src="require(`@/assets/back-2.svg`)" alt="" />
    <img class="treetwo" :src="require(`@/assets/tree.svg`)" alt="" />
    <img class="clouds three" :src="require(`@/assets/back-3.svg`)" alt="" />
    <div class="home__center">
      <div class="home__logo">
        <img
          class="letter"
          @mouseover="turnletter"
          :src="require(`@/assets/letter-m.svg`)"
          alt=""
        />
        <img
          class="letter"
          @mouseover="turnletter"
          :src="require(`@/assets/letter-i.svg`)"
          alt=""
        />
        <img
          class="letter"
          @mouseover="turnletter"
          :src="require(`@/assets/letter-t.svg`)"
          alt=""
        />
        <img
          class="letter"
          @mouseover="turnletter"
          :src="require(`@/assets/letter-c.svg`)"
          alt=""
        />
        <img
          class="letter"
          @mouseover="turnletter"
          :src="require(`@/assets/letter-h.svg`)"
          alt=""
        />
      </div>
      <div class="home__bottom">
        <h2 class="home__iam">{{ inner }}</h2>
        <div class="cube" :class="{ rotate: Rotate }">
          <div class="top"></div>
          <div class="bottom"></div>
          <div class="front"><h2>Front-end developer</h2></div>
          <div class="back"><h2>Interactive designer</h2></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      Rotate: false,
      inner: "I am a",
      Turn: false
    };
  },
  beforeCreate() {
    document.body.className = "home";
  },
  methods: {
    startInterval: function() {
      let thus = this;
      setTimeout(() => {
        thus.Rotate = true;
        thus.inner = "I am an";
        setTimeout(() => {
          thus.Rotate = false;
          thus.inner = "I am a";
          setTimeout(() => {
            thus.startInterval();
          }, 1000);
        }, 4000);
      }, 2000);
    },
    turnletter: function(el) {
      el.target.classList.add("turn");
      setTimeout(() => {
        el.target.classList.remove("turn");
      }, 600);
      // this.Turn = true;
    }
  },
  created() {
    this.startInterval();
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  background-image: url(../assets/stripes.svg);
  background-size: 60px;

  &__center {
    position: relative;
    z-index: 9999;
  }

  &__logo {
    display: flex;
    max-width: 400px;
    width: 100%;
    margin-bottom: 0.5rem;
    perspective: 1000px;

    img {
      width: auto;
      height: 65px;
    }
  }

  &__iam {
    padding-right: 5px;
  }

  &__bottom {
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;

    h2 {
      text-transform: uppercase;
      transition: 0.5s;
    }
  }
}

.letter {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform-origin: center;
  margin-right: 0.4em;
}

.turn {
  transform: rotateY(360deg);
}

.clouds {
  position: fixed;
  z-index: 1;
  bottom: 0rem;
  margin-left: -5rem;
  width: calc(100% + 10rem);
}

.one {
  animation: shake 15s ease-in-out infinite alternate;
}
.two {
  animation: shake 14s ease-in-out infinite alternate;
}
.three {
  animation: shake 13.5s ease-in-out infinite alternate;
  animation-delay: 1s;
}

.tree {
  position: fixed;
  right: 25vw;
  bottom: 15vh;
  z-index: 1;
  margin-left: -5rem;
  width: 5rem;
  transform-origin: bottom center;
  animation-delay: 1s;
  animation: move 4s ease-in-out infinite alternate;
}

.treetwo {
  position: fixed;
  left: 18vw;
  bottom: 5vh;
  z-index: 1;
  margin-left: -5rem;
  width: 10rem;
  transform-origin: bottom center;
  animation: move 4s ease-in-out infinite alternate;
}

.cube {
  -webkit-transform-style: preserve-3d;
  -webkit-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1);
  -webkit-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -moz-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -o-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  position: relative;
  max-width: 200px;
  width: 100%;
  height: 60px;
  color: #fff;
}

.cls-1 {
  fill: #1d1d1b;
}

.cube div {
  width: 100%;
  height: 100%;
  line-height: 60px;
  text-align: center;
  display: block;
  position: absolute;

  h2 {
    padding-left: 5px;
  }
}

.cube div.top {
  -webkit-transform: rotateX(90deg);
  margin-top: -30px;
  background: #dd2c63;
}

.cube div.bottom {
  -webkit-transform: rotateX(-90deg);
  margin-top: 30px;
  background: #883de2;
}

.cube div.front {
  -webkit-transform: translateZ(30px);
  background: #ff3268;
  display: flex;
}

.cube div.back {
  -webkit-transform: translateZ(-30px) rotateX(180deg);
  background: #9744fa;
  display: flex;
}

.rotate {
  -webkit-transform: rotateY(0deg) rotateX(-180deg);
}

@keyframes move {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(5deg);
  }
}

@keyframes shake {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(5rem);
  }
}

@media only screen and (max-width: 600px) {
  h2 {
    font-size: 1em;
  }
}

@media only screen and (min-width: 800px) {
  .tree {
    position: fixed;
    right: 25vw;
    bottom: 25vh;
    z-index: 1;
    margin-left: -5rem;
    width: 10rem;
    transform-origin: bottom center;
    animation-delay: 1s;
    animation: move 4s ease-in-out infinite alternate;
  }

  .treetwo {
    position: fixed;
    left: 18vw;
    bottom: 0vh;
    z-index: 1;
    margin-left: -5rem;
    width: 15rem;
    transform-origin: bottom center;
    animation: move 4s ease-in-out infinite alternate;
  }
}

@media only screen and (min-width: 1200px) {
  .home {
    &__logo {
      img {
        height: 100px;
      }
    }
  }

  .cube {
    -webkit-transform-style: preserve-3d;
    -webkit-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition: all 1500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    position: relative;
    max-width: 300px;
    width: 100%;
    height: 60px;
    color: #fff;
  }

  .tree {
    position: fixed;
    right: 25vw;
    bottom: 50vh;
    z-index: 1;
    margin-left: -5rem;
    width: 10rem;
    transform-origin: bottom center;
    animation-delay: 1s;
    animation: move 4s ease-in-out infinite alternate;
  }

  .treetwo {
    position: fixed;
    left: 18vw;
    bottom: 20vh;
    z-index: 1;
    margin-left: -5rem;
    width: 15rem;
    transform-origin: bottom center;
    animation: move 4s ease-in-out infinite alternate;
  }
}
</style>
