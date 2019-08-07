<template>
  <section class="pokedex">
    <BackCircle />
    <div class="half"></div>
    <div class="pokedex--padding">
      <div class="main-block">
        <TitleImageBlock :titleData="titleData" />
        <div class="pokedex__second block">
          <div class="left">
            <!-- <img :src="require(`@/assets/poke-detail.png`)" alt="" /> -->
          </div>
          <div class="right">
            <h4>Research</h4>
            <p>
              After doing research and meeting Marie I found out that she has no
              sense of who is speaking, what background noices are and does not
              get emotions in sentences.
            </p>
            <p>
              The UX podcast makes it possible for her by linking colors to
              emotions and adding them to the sentences. When a person is
              speaking the circle around the speaker gets bigger in the color of
              the emotion.
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
          title: "UX-Podcast",
          smallTitle: "Webdesign, making the web accesible for everyone",
          subTitle: "Course",
          text:
            "Webdesign was focused on the accessibility of websites, something that many people are familiar with but that still does not do enough about. I have built an application for Marie. She is deaf and therefore cannot use podcasts if there is no subtitles, and even then it's hard for her to see which speaker is actually speaking",
          ghLink: "https://webdesignmarie.herokuapp.com/",
          linkText: "Open Project",
          link: true,
          imageName: "ux-design.png",
          imageAlt: "Image of homescreen of the ux podcast"
        }
      ],
      blockInfoData: [
        {
          title: "technology",
          text:
            "The aim of the assignment was to do reasearch and make prototypes as quickly as possible and test them with the target group. The podcast was tested with Marie once every week to get the result wanted."
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
      margin-bottom: 1rem;
    }

    .right {
      width: 30%;
      padding-left: 0em;

      p {
        margin-bottom: 1em;
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
  height: 40%;
  width: 100%;
  background-image: url(../assets/stripes-light.png);
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

    .middle {
      width: 50%;
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
