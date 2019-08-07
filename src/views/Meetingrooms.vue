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
      course: "Mirabeau assignment",
      titleData: [
        {
          title: "Mirabeau Meeting-rooms",
          smallTitle: "Mirabeau assignment",
          subTitle: "The assignment",
          text:
            "The Mirabeau meeting rooms app is an application that can be used by Mirabeau employees to see which meeting rooms are available and which room has the most favorable factors, such as temperature, light, seats and noisiness. All these factors are measured in real time by sensors that are placed in the meeting rooms.",
          ghLink: "https://github.com/Denniswegereef/smart-rooms",
          link: true,
          linkText: "View github Repo",
          imageName: "mir-design.png",
          imageAlt: "Image of mirabeau meeting rooms",
          id: 4
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
    display: flex;
    align-items: center;

    img {
      border-radius: 0.5em;
      min-width: 500px;
      width: 100%;
    }

    .right {
      width: 50%;
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
      margin-top: 0.8rem;
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
