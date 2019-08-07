<template lang="html">
  <router-link
    class="bubble"
    :class="{ show }"
    :to="{ name: 'portfolio', params: {} }"
  >
    <img src="../assets/portfolio-icon.svg" alt="portfolio icon with bubble" />
    <img
      class="bubble__arrow"
      v-if="portfolio"
      style="width: 80px;"
      src="../assets/portfolio-arrow.svg"
      alt="portfolio icon with bubble"
    />
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      portfolio: true
    };
  },
  watch: {
    $route() {
      if (this.$route.name === "about" || this.$route.name === "contact") {
        this.portfolio = false;
      } else {
        this.portfolio = true;
      }
    }
  },
  created() {
    if (this.$route.name === "about" || this.$route.name === "contact") {
      this.portfolio = false;
    } else {
      this.portfolio = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.bubble {
  position: fixed;
  bottom: -45px;
  left: 50%;
  margin-left: -40px;
  width: 80px;
  height: 90px;
  border-radius: 100%;
  background-color: #ff3268;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
  z-index: 99999;

  &__arrow {
    position: absolute;
    width: 300px;
    top: -50%;
    left: -100%;
  }

  &:hover {
    &::after {
      transform: scale(1.2);
    }
  }

  &:active {
    transform: scale(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 90px;
    background-color: rgba(255, 50, 110, 0.4);
    border-radius: 100%;
    z-index: -1;
    -webkit-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  }

  img {
    transition: 0.6s;
    width: 18px;
    transform: translateY(-20px);
  }
}
</style>
