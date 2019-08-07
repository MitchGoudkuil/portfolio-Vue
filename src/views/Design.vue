<template>
  <section class="design">
    <BackCircle />
    <sliderDesign />
    <div class="half"></div>
    <div class="half__animation">
      <lottie
        :options="defaultOptions"
        :width="400"
        class="anim"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </section>
</template>

<script>
import BackCircle from "../components/Backcircle.vue";
import sliderDesign from "../components/Slider-design.vue";
import Lottie from "vue-lottie";
import * as animationData from "../assets/paint.json";

export default {
  name: "portfolio",
  components: {
    BackCircle,
    sliderDesign,
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  },
  beforeCreate() {
    document.body.className = "subject-fixed design";
  }
};
</script>

<style lang="scss" scoped>
.design {
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.half {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  background-image: url(../assets/stripes.svg);
  background-size: 30px;
  z-index: -1;

  &__animation {
    position: absolute;
    bottom: -4rem;
    left: 5%;
    z-index: 1000;
  }
}

.mini-block {
  position: fixed;
  bottom: 3rem;
  right: 0;
  background-color: #9744fa;
  padding: 1rem;

  img {
    width: 40px;
  }
}

@media only screen and (max-width: 600px) {
  .half {
    &__animation {
      display: none;
    }
  }
}

@media only screen and (min-width: 900) {
  .half {
    &__animation {
      left: -10%;
    }
  }
}
</style>
