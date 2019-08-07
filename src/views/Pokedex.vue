<template>
  <section class="pokedex">
    <BackCircle />
    <div class="half"></div>
    <div class="pokedex--padding">
      <div class="main-block">
        <TitleImageBlock :titleData="titleData" />
        <div class="pokedex__second block">
          <div class="left">
            <img :src="require(`@/assets/poke-detail.png`)" alt="" />
          </div>
          <div class="right">
            <h4>About Pokesearch</h4>
            <p>
              Pokesearch is an app build to find information about all pokemon
              ever. Find your favorite pokemon, check the stats, add them to
              your team, or check how the pokemon looks in its "shiny" form.
            </p>
          </div>
        </div>
        <bottomInfoBlock :blockInfoData="blockInfoData" />
      </div>
    </div>
  </section>
</template>

<script>
import BackCircle from "../components/Backcircle.vue";
import TitleImageBlock from "../components/title-image-block.vue";
import bottomInfoBlock from "../components/bottomInfoBlock.vue";

export default {
  name: "portfolio",

  data() {
    return {
      titleData: [
        {
          title: "Pokesearch",
          smallTitle: "Web app from scratch",
          subTitle: "Course",
          text:
            "For the minor web development we had to get used to working with an API. How to fetch data and render this on the page. I chose an API with a theme of something that I used to like very much, Pokemon.",
          ghLink:
            "https://mitchgoudkuil.github.io/web-app-from-scratch-18-19/week2/",
          linkText: "Website Link",
          link: true,
          imageName: "poke-screen.png",
          imageAlt: "Image of the pokemon screen ",
          id: 2
        }
      ],
      blockInfoData: [
        {
          title: "technology",
          text:
            "The learning curve of the project was retrieving data through the API and rendering this data on the page. Thanks to Javascript modules, the functions are structured on processing data, retrieving data and rendering the data."
        }
      ]
    };
  },
  components: {
    BackCircle,
    TitleImageBlock,
    bottomInfoBlock
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

  &__second {
    display: block;
    align-items: center;

    img {
      border-radius: 1em;
    }

    .right {
      padding-left: 0em;
      margin-top: 1rem;
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
        padding-left: 2em;
        margin-top: 0rem;
      }
    }

    &--padding {
      padding: 8rem;
    }
    .middle {
      width: 40%;
    }
  }
}
</style>
