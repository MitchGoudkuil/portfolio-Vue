<template>
  <section class="frontend">
    <BackCircle />
    <transition name="slidedown">
      <Slider />
    </transition>
    <div class="half">
      <div class="half__animation"></div>
    </div>
    <!-- <div class="mini-block">
      <img :src="require(`@/assets/web.svg`)" alt="" />
    </div> -->
  </section>
</template>

<script>
import BackCircle from "../components/Backcircle.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "portfolio",
  data() {
    return {
      show: false
    };
  },
  components: {
    BackCircle,
    Slider
  },
  beforeCreate() {
    document.body.className = "subject-fixed frontend";
  }
};
</script>

<style lang="scss" scoped>
.frontend {
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    bottom: -1rem;
    left: 8rem;
  }
}
</style>
