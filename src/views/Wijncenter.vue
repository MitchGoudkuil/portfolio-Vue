<template>
  <section class="pokedex">
    <BackCircle />
    <div class="half"></div>
    <div class="pokedex--padding">
      <div class="main-block">
        <TitleImageBlock :titleData="titleData" />
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
          title: "Wijncenter Nederland",
          smallTitle: "A webshop build with wordpress and woocommerce.",
          subTitle: "",
          text:
            "Wijncenter Nederland is an online webshop with wines from the Mont-Ventoux region. Wijncenter Nederland offers a wide, luxury assortment for an affordable price.",
          ghLink: "http://www.wijncenternederland.nl/",
          linkText: "Wijncenter Nederland",
          link: true,
          imageName: "wijn-big.jpg",
          imageAlt: "Image of the pokemon screen ",
          id: 2
        }
      ],
      blockInfoData: [
        {
          title: "technology",
          text:
            "The website is build with Wordpress and woocommerce. I picked this combination because the client wanted an easy way to adjust the content in the store and on every page. The website was my first introduction to webshops and I learned a lot about wordpress in the progress."
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

    &--padding {
      padding: 8rem;
    }
    .middle {
      width: 40%;
    }
  }
}
</style>
