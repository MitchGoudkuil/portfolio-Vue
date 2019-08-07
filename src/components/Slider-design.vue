<template lang="html">
  <div class="slider-container">
    <h1>Design</h1>
    <div class="slider-container__info">
      <div class="slider-container__amount">
        <p>Case {{ Mainnumb }} of {{ itemAmount }}</p>
      </div>
      <h1 v-html="DesignJson[Projectnumb].Title"></h1>
      <p class="descr" v-html="DesignJson[Projectnumb].SDescr"></p>
    </div>
    <router-link :to="DesignJson[Projectnumb].Link">
      <div
        class="slider-container__image"
        :style="{
          'background-image':
            'url(' + require(`@/assets/${DesignJson[Projectnumb].Image}`) + ')'
        }"
      ></div>
    </router-link>
    <div class="slider-container__nav">
      <button class="pink" v-on:click="chooseProject('next')">
        <img src="../assets/arrow-right.svg" alt="" />
      </button>
      <button class="purple" v-on:click="chooseProject('prev')">
        <img src="../assets/arrow-left.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import FroData from "../assets/frontend-data.json";
import DesData from "../assets/design-data.json";
export default {
  data() {
    return {
      FrontendJson: FroData,
      DesignJson: DesData,
      Projectnumb: 0,
      Mainnumb: 1,
      itemAmount: ""
    };
  },
  methods: {
    chooseProject: function(param) {
      if (param === "next") {
        if (this.Mainnumb >= this.itemAmount) {
          this.Projectnumb = 0;
          this.Mainnumb = 1;
        } else {
          // console.log("cant go further");
        }
        this.Projectnumb++;
        this.Mainnumb++;
      } else if (param === "prev") {
        if (this.Projectnumb <= 0) {
          this.Projectnumb = 1;
          this.Mainnumb = 1;
        } else {
          // console.log("cant go further");
        }
        this.Projectnumb--;
        this.Mainnumb--;
      }
    }
  },
  created() {
    const parsedData = JSON.parse(JSON.stringify(this.DesignJson));
    const dataLength = Object.keys(parsedData).length;
    this.itemAmount = dataLength.toString();
  }
};
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;

  h1 {
    margin-bottom: 0.2em;
  }

  &__info {
    max-width: 100%;
    left: 0rem;
    top: 100%;
    padding: 1.5rem 2rem;
    position: absolute;
    background-color: #000;
    display: inline-block;
    color: #fff;
    padding: 1.5rem 2rem;

    h1 {
      font-size: 1.5em;
    }

    .descr {
      color: #fff;
      margin-top: 0.3rem;
    }
  }

  &__amount {
    position: absolute;
    color: #000;
    top: -2em;
    left: 0;
    padding: 0.5em 1em;
    border: 1px solid #000;
    background-color: #fff;
  }
  &__image {
    width: 500px;
    height: 400px;
    background-size: cover;
    background-position: center;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
  }

  &__nav {
    position: absolute;
    right: -44px;
    top: 1rem;

    button {
      display: block;
      margin-bottom: 0.5rem;
      border: none;
      padding: 1rem 1rem;

      img {
        width: 12px;
      }
    }
  }
}

.pink {
  background-color: #ff3268;
}

.purple {
  background-color: #9744fa;
}

@media only screen and (max-width: 600px) {
  .slider-container {
    &__info {
      max-width: 100%;
      width: 100%;
      left: 0rem;
      top: 100%;
      padding: 1.5rem 2rem;
    }

    &__amount {
      background-color: #fff;
      top: -1.5em;
    }

    &__image {
      width: 80vw;
      height: 350px;
    }

    &__nav {
      right: -34px;
      top: 90%;
    }
  }
}

@media only screen and (min-width: 1000px) {
  .slider-container {
    &__info {
      max-width: 16rem;
      width: 100%;
      left: -10rem;
      top: 4rem;
    }

    &__amount {
      background-color: #fff;
      background-color: rgba(0, 0, 0, 0);
    }

    &__image {
      width: 500px;
      height: 400px;
    }

    &__nav {
      top: 4rem;
    }
  }
}
</style>
