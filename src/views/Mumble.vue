<template>
  <section class="pokedex">
    <BackCircle />
    <div class="half"></div>
    <div class="pokedex--padding">
      <div class="main-block">
        <TitleImageBlock :titleData="titleData" />
        <div class="pokedex__second block">
          <div class="left"></div>
          <div class="right">
            <h4>About Mumblerun</h4>
            <p>
              Mumblerun is an application that allows different users to gamble
              on their favorite Mumble rapper. Every 25 seconds the rappers
              start racing against each other based on live tweets about the
              rapper. In between, it is possible for the user to bet fake money
              and thus gamble.
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
          title: "Mumblerun",
          smallTitle: "Real time web, (Work in progress)",
          subTitle: "Course",
          text:
            "Real-time web was a subject for the minor web development. The focus was on working with web sockets and building something that can be used by multiple users at the same time.",
          ghLink: "https://mumblerun.herokuapp.com/",
          link: true,
          linkText: "Open Project prototype",
          imageName: "mum-design2.jpg",
          imageAlt: "Image of mumblerun",
          id: 1
        }
      ],
      blockInfoData: [
        {
          title: "technology",
          text:
            "Mumblerun bevat een real-life chat, goksysteem en virtuele racebaan. Mumble Run is a side project that I am currently still working on."
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
      border-radius: 0.5em;
      min-width: 500px;
      width: 100%;
    }

    .right {
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
