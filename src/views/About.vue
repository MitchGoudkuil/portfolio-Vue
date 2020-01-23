<template>
  <div class="about">
    <div class="slime">
      <lottie
        class="anim"
        :width="230"
        :options="defaultOptions"
        v-on:animCreated="handleAnimation"
      />
    </div>
    <div class="center-block">
      <div class="center-block__left">
        <h1>Hi, I’m MITCH.</h1>
        <p>
          Nice to meet you! My name is Mitch Goudkuil, I’m 25 years old and
          living in the beautyful city of
          <span @mouseover="mouseOver" class="pink amsterdam">Amsterdam</span>.
          I’m a graduated Interaction designer and currently a student
          communication & multimedia design on the school of applied sciences.
        </p>
        <p>
          I’m a creative, with an enthusiasm for animations and illustrations.
        </p>
      </div>
      <div class="center-block__right">
        <button
          :class="{ turn: turned, active: active }"
          @click="setSerious"
          class="button button__line"
        >
          Why so serious?
        </button>
        <div :class="{ turn: turned }" class="image-block">
          <img src="../assets/mitch-wit2.jpg" alt="" />
          <img
            :class="{ grow: grow }"
            class="mustache"
            src="../assets/mustache.svg"
            alt=""
          />
          <img
            :class="{ arr: arr }"
            class="piratehat"
            src="../assets/piratehat.svg"
            alt=""
          />
          <img
            :class="{ arr: arr }"
            class="monocle"
            src="../assets/monocle.svg"
            alt=""
          />
          <img
            :class="{ money: money }"
            class="chain"
            src="../assets/chain.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="bow"></div>
    <img
      :class="{ boating: boating }"
      class="ship"
      src="../assets/ship.svg"
      alt=""
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "../assets/hanging.json";

export default {
  name: "about",
  components: {
    Lottie
  },
  data() {
    return {
      turned: false,
      active: false,
      grow: true,
      arr: true,
      money: true,
      boating: false,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
      ishanging: true
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    setSerious: function() {
      this.turned = !this.turned;
      this.active = !this.active;
      this.grow = !this.grow;
      this.arr = !this.arr;
      this.money = !this.money;
      this.boating = !this.boating;
      document.body.classList.toggle("hooked");
    },
    mouseOver: function() {
      // this.style.cursor = "url('../assets/logo.png')";
    }
  },
  beforeCreate() {
    document.body.className = "about";
  }
};
</script>

<style lang="scss" scoped>
.turn {
  transform: rotate(10deg);
}

.hooked {
  cursor: url(../assets/hook.svg) 4 7, pointer;
}

.slime {
  position: absolute;
  left: 10%;
  top: -2.5em;
  transform-origin: top center;
  animation: sling 1.5s infinite alternate ease-in-out;
}

.bow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-color: #efefef;
  border-top-left-radius: 70%100px;
  border-top-right-radius: 0%80px;
}

.boating {
  bottom: 0;
}

// .anim {
//   width: 230px;
//   z-index: -1;
// }

.ship {
  position: absolute;
  right: 6em;
  bottom: 8.4em;
  width: 10rem;
  animation: wobble 4s alternate infinite;
  -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1);
  -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -moz-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -o-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
  -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
}

@keyframes wobble {
  0% {
    transform: translateY(-5px) rotate(1deg);
  }
  50% {
    transform: translateY(5px) rotate(-4deg);
  }
  100% {
    transform: translateY(-5px) rotate(1deg);
  }
}

@keyframes sling {
  from {
    transform: rotate(-20deg);
  }
  to {
    transform: rotate(20deg);
  }
}

.about {
  overflow: hidden;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/pattern-back.jpg);
  background-size: cover;
}

.pink {
  cursor: pointer;
  color: #ff3268;
}

.button {
  position: relative;
  z-index: 2;
  display: inline-block;
  margin-bottom: 0.4em;
  font-size: 0.857em;
  cursor: pointer;
  transition: 0.3s;

  &__line {
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: -1px;
      top: -1px;
      height: calc(100% + 2px);
      width: 0%;
      background-color: #ff3268;
      transition: 0.3s;
      cursor: pointer;
    }

    &:hover {
      color: #fff;

      &::after {
        width: calc(100% + 2px);
      }
    }
  }
}

.active {
  color: #fff;
  border: 1px solid #ff3268;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    z-index: -1;
    background-color: #ff3268;
  }
}

.center-block {
  display: flex;
  padding: 5em;

  &__left {
    max-width: 350px;
    width: 100%;
    margin-top: 1.5rem;

    p {
      padding-right: 2rem;
      margin-bottom: 0.7rem;
    }
  }
  &__right {
    max-width: 300px;
    width: 100%;
    text-align: right;

    img {
      width: 100%;
    }
  }
}

.image-block {
  position: relative;
  width: 300px;
  max-height: 300px;
  height: 100%;
  overflow: hidden;
  display: block;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
  -webkit-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1);
  -webkit-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -moz-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -o-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
  -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);

  .mustache {
    position: absolute;
    left: 5.7em;
    top: 9em;
    width: 60px;
    -webkit-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition: all 300ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  }

  .piratehat {
    position: absolute;
    left: 3em;
    top: 1em;
    width: 185px;
    -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  }

  .monocle {
    position: absolute;
    left: 5.8em;
    top: 6.7em;
    width: 95px;
    -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  }

  .chain {
    position: absolute;
    left: 5.9em;
    top: 11.9em;
    width: 111px;
    -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition: all 500ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  }
}

.grow {
  opacity: 0;
  transform: scale(0.1);
}

.arr {
  transform: translateX(-15em);
}

.money {
  transform: translateY(15em);
}

@media only screen and (max-width: 600px) {
  .center-block {
    display: block;
    z-index: 100;

    &__left {
      width: 100%;
      margin: 0 auto;

      p {
        padding-right: 0;
      }
    }

    &__right {
      width: 100%;
      margin: 0 auto;
    }
  }

  .image-block {
    width: 200px;
    max-height: 200px;
    height: 100%;
    margin: 0 auto;

    .mustache {
      left: 2.9em;
      top: 5.9em;
      width: 40px;
    }

    .piratehat {
      left: 1.9em;
      top: 0.5em;
      width: 140px;
    }

    .monocle {
      left: 4.6em;
      top: 4.2em;
      width: 65px;
    }

    .chain {
      left: 3.8em;
      top: 8em;
      width: 70px;
    }
  }

  .button {
    display: block;
    margin: 0 auto;
    margin-bottom: 0.6em;
  }

  .anim {
    display: none;
  }

  .ship {
    display: none;
  }
}
</style>
