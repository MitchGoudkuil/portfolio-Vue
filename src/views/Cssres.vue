<template>
  <section class="pokedex">
    <BackCircle />
    <div class="half"></div>
    <div class="pokedex--padding">
      <div class="main-block">
        <TitleImageBlock :titleData="titleData" />
      </div>
    </div>
  </section>
</template>

<script>
import BackCircle from "../components/Backcircle.vue";
import TitleImageBlock from "../components/title-image-block.vue";

export default {
  name: "portfolio",
  data() {
    return {
      titleData: [
        {
          title: "Snackbar the small fry",
          smallTitle: "Css to the rescue",
          subTitle: "The course",
          text:
            "The course css to the rescue was focussed on exploiting css to the maximum. I made a small menu website for a snackbar which I called Snackbar the small fry. In this project I did research to svg animations, checkbox hacks and css animations. The whole website is build with html and css only.",
          ghLink: "http://mitchgoudkuil.nl/projects/cssres/",
          linkText: "Show project",
          imageName: "css-design.jpg",
          imageAlt: "Image of the website made totally out of css.",
          link: true,
          id: 6
        }
      ]
    };
  },
  components: {
    BackCircle,
    TitleImageBlock
  },
  beforeCreate() {
    document.body.className = "subject";
  }
};
</script>

<style lang="scss" scoped>
.pokedex {
  position: relative;
  width: 100vw;
  height: 100%;
  text-align: left;
  overflow: visible;

  img {
    width: 100%;
  }

  a {
    color: #9744fa;
  }

  &--padding {
    padding: 4rem;
    padding-top: 8rem;
  }

  &__first {
    display: block;
    align-items: center;

    img {
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
    }
  }

  &__image {
    width: 100%;
  }
}

.block {
  margin-bottom: 6rem;
}

.main-block {
  width: 100%;

  &__item {
    background-color: #fff;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }
}

.half {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  background-image: url(../assets/stripes-light.png);
  background-size: 500px;
  z-index: -1;
}

h4 {
  padding-bottom: 0.3rem;
}

@media only screen and (max-width: 600px) {
  .photo-container {
    column-count: 1;
  }
}

@media only screen and (min-width: 1024px) {
  .pokedex {
    &__second {
      display: flex;
      align-items: center;

      img {
        border-radius: 1em;
      }

      .right {
        margin-top: 0rem;
        width: 40%;
      }
      .left {
        margin-top: 0rem;
        width: 60%;
      }
    }
    &--padding {
      padding: 8rem;
    }
    .middle {
      width: 30%;
    }
  }
}
</style>
