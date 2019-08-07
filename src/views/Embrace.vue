<template>
  <section class="pokedex">
    <BackCircle />
    <div class="half"></div>
    <div class="pokedex--padding">
      <div class="main-block">
        <TitleImageBlock :titleData="titleData" />
        <div class="pokedex__second block">
          <div class="left">
            <img :src="require(`@/assets/emb-logo.jpg`)" alt="" />
          </div>
          <div class="right">
            <h4>Small info</h4>
            <p>
              Robin Embrace played in country's and city's like Los Angeles,
              Dubai, Italy, France, Germany, England and the Netherlands. With
              his website I wanted to show his identity and tell the story of
              who Robin Embrace really is.
            </p>
          </div>
        </div>
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
      course: "Website made from scratch",
      titleData: [
        {
          title: "Robin Embrace",
          smallTitle: "Website made from scratch",
          subTitle: "The assignment",
          text:
            "This website was made for my brother Robin. He is a DJ under the name Robin Embrace. He plays music ranging from deep house to tech house, house, eclectic etc. His website contains his music, agenda and locations he played at.",
          ghLink: "http://www.robinembrace.nl/",
          link: true,
          linkText: "Open website",
          imageName: "emb-image.jpg",
          imageAlt: "Image of the website of Robin Embrace",
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

      p {
        width: 50%;
      }
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
  background-image: url(../assets/stripes-light.png);
  background-size: 500px;
  z-index: -1;
}

h4 {
  padding-bottom: 0.3rem;
}

@media only screen and (max-width: 600px) {
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
