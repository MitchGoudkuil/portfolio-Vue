<template>
  <section class="pokedex">
    <BackCircle />
    <div class="half"></div>
    <div class="pokedex--padding">
      <div class="main-block">
        <img
          style="width: 330px"
          class="google"
          :src="require(`@/assets/bot-google.svg`)"
          alt=""
        />
        <TitleImageBlock :titleData="titleData" />
        <div class="pokedex__second block">
          <div class="left"></div>
          <div class="right">
            <h4>About Overhoorbot</h4>
            <p>
              Overhoorbot is an application that collaborates with the google
              assistant that helps blind students practice words. The teacher
              can make a list of words on overhoorbot.nl and then pass on the
              code to the student, who can then add the list to the visual
              interface and practice the list by using speech.
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
          title: "Overhoorbot",
          smallTitle: "Minor web development, Master Test",
          subTitle: "Course",
          text:
            "In the master test we had to show our newly learned skills by doing an assignment. I chose to work on the Overhoorbot. The project ended in a nomination for a golden dot award.",
          ghLink: "https://github.com/Arash217/meesterproef-1819",
          linkText: "Open github repo",
          link: true,
          imageName: "bot-design.png",
          imageAlt:
            "Image of the overhoorbot made for blind students who want to learn words."
        }
      ],
      blockInfoData: [
        {
          title: "technology",
          text:
            "Because the technology behind the Google Assistant is not very developed yet, there was a good chance that the project could fail. The application runs on DialogFlow which is the programm used to make intents and connect this to the agent."
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
    align-items: center;
    display: flex;

    img {
      border-radius: 1em;
    }

    .left {
      width: 20%;
    }

    .right {
      width: 80%;
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

.google {
  position: fixed;
  bottom: -2rem;
  left: 3rem;
  display: none;
}

.half {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 35%;
  width: 100%;
  background-image: url(../assets/bot-pattern.jpg);
  background-size: 150px;
  z-index: -1;
}

@media only screen and (min-width: 1024px) {
  .pokedex {
    &--padding {
      padding: 8rem;
      padding-top: 8rem;
    }

    &__second {
      align-items: center;
      display: flex;

      img {
        border-radius: 1em;
      }

      .left {
        width: 60%;
      }

      .right {
        width: 40%;
      }
    }
    .middle {
      width: 50%;
    }
  }

  .google {
    display: block;
  }
}
</style>
