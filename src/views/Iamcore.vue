<template>
  <section class="detail detail--padding">
    <BackCircle />
    <TitleImageBlock :titleData="titleData" />

    <div class="half">
      <div class="half__animation"></div>
    </div>
  </section>
</template>

<script>
import BackCircle from "../components/Backcircle.vue";
import DesData from "../assets/design-data.json";
import TitleImageBlock from "../components/title-image-block.vue";

export default {
  name: "Sneakers",
  components: {
    BackCircle,
    TitleImageBlock
  },
  data() {
    return {
      pageId: this.$route.params.id,
      DesignJson: DesData,
      bigDesciption: "",
      Bimage: "",
      titleData: [
        {
          title: "Iamcore posters",
          smallTitle: "Made for the study association IAmCore",
          subTitle: "",
          text:
            "At the start of my studies I became a member of study association Iamcore and I joined the PR team. My job in the PR team was to design posters and flyers for the upcoming parties that were organized by Iamcore. Alongside are the 5 posters that I designed during my PR year.",
          link: false,
          ghLink: "",
          linkText: "Open website",
          imageName: "design/transavia.png",
          imageAlt: "Image of the website of Robin Embrace",
          id: 10
        }
      ]
    };
  },
  beforeCreate() {
    document.body.className = "subject-fixed frontend";
  }
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  display: block;
  align-items: center;
  justify-content: center;

  &__center {
    display: block;
    max-width: 1200px;
    width: 100%;
  }

  &__left {
    width: 100%;
    padding-right: 2em;
  }

  &__right {
    width: 100%;
  }

  &__image {
    width: 100%;
  }

  &--padding {
    padding: 4rem;
    padding-top: 8rem;
  }
}
h1 {
  padding-bottom: 0.5rem;
}

.half {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40%;
  width: 100%;
  background-image: url(../assets/stripes.svg);
  background-size: 30px;
  z-index: -1;

  &__animation {
    position: absolute;
    bottom: -1rem;
    left: 8rem;
  }
}

@media only screen and (min-width: 1024px) {
  .detail {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8rem;
  }

  &__left {
    width: 30%;
    padding-right: 2em;
  }

  &__right {
    width: 70%;
  }

  &__center {
    display: flex;
    max-width: 1200px;
    width: 100%;
  }
}
</style>
