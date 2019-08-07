<template>
  <section class="portfolio">
    <centerBlocks />
    <BackCircle />
    <div class="standingslime">
      <lottie
        class="anim"
        :options="defaultOptions"
        :width="350"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </section>
</template>

<script>
import centerBlocks from "../components/center-blocks.vue";
import BackCircle from "../components/Backcircle.vue";
import Lottie from "vue-lottie";
import * as animationData from "../assets/swing.json";

export default {
  name: "portfolio",
  components: {
    centerBlocks,
    BackCircle,
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
    document.body.className = "portfolio";
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.standingslime {
  position: absolute;
  bottom: -5em;
  left: 10%;
}

@media only screen and (min-width: 600px) {
  .standingslime {
    position: absolute;
    bottom: -5em;
    left: -10%;
  }
}

@media only screen and (max-width: 600px) {
  .standingslime {
    position: absolute;
    bottom: 7em;
    left: -10%;
    transform: rotate(30deg);
  }

  .portfolio {
    padding: 2rem;
  }

  .anim {
    display: none;
  }
}

@media only screen and (min-width: 1000px) {
  .standingslime {
    position: absolute;
    bottom: -5em;
    left: 10%;
  }
}
</style>
