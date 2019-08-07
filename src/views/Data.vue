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
          title: "Oba Disney Books",
          smallTitle: "A data visualisation",
          subTitle: "The project",
          text:
            "I followed a course called data visualization in which we learned how to retrieve data, find funny points of contact and how to visualize this. I made a visualization for the library of Amsterdam about the disney books through the years. Through the OBA api we were able to retrieve the data and visualize this through D3.",
          ghLink: "http://mitchgoudkuil.nl/school/frontend-data/",
          linkText: "Show visualisation",
          imageName: "dis-ney.jpg",
          link: true,
          imageAlt:
            "Image of the data visualisation made out of the data from disney books in the public library in Amsterdam.",
          id: 5
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

  p {
    margin-bottom: 1rem;
  }

  &--padding {
    padding: 4rem;
    padding-top: 8rem;
  }

  &__second {
    display: flex;
    align-items: center;

    img {
      border-radius: 1em;
    }

    .right {
      padding-left: 2em;
    }
  }

  &__third {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d1d1d;
    padding: 2rem;
    border-radius: 2em;

    h4 {
      color: #fff;
    }

    p {
      color: #fff;
    }

    .middle {
      width: 100%;
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
  background-image: url(../assets/grass.png);
  background-size: 500px;
  z-index: -1;
}

h4 {
  padding-bottom: 0.3rem;
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
