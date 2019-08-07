<template>
  <section class="photography">
    <BackCircle />
    <div class="photography--padding">
      <h1>Photography</h1>
      <div class="photo-container">
        <img
          v-for="data in PhotoJson"
          :key="data.key"
          class="photo-container__item"
          :src="require(`@/assets/photography/${data.image}`)"
          :alt="data.desc"
        />
      </div>
    </div>
    <!-- <div class="mini-block">
      <img :src="require(`@/assets/camera.svg`)" alt="" />
    </div> -->
  </section>
</template>

<script>
import BackCircle from "../components/Backcircle.vue";
import Json from "../assets/photography.json";

export default {
  name: "portfolio",
  data() {
    return {
      PhotoJson: Json
    };
  },
  components: {
    BackCircle
  },
  beforeCreate() {
    document.body.className = "subject";
  }
};
</script>

<style lang="scss" scoped>
.photography {
  position: relative;
  width: 100vw;
  height: 100%;
  text-align: left;
  overflow: visible;

  &--padding {
    padding: 2em;
    padding-top: 6rem;
  }
}

.photo-container {
  width: 100%;
  column-count: 4;
  column-gap: 1em;
  margin-top: 1rem;
  &__item {
    background-color: #fff;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }
}

.mini-block {
  position: fixed;
  bottom: 3rem;
  right: 0;
  background-color: #ff3268;
  padding: 1rem;

  img {
    width: 40px;
  }
}

@media only screen and (max-width: 600px) {
  .photo-container {
    column-count: 1;
  }
}

@media only screen and (min-width: 1024px) {
  .photo-container {
    column-count: 4;
  }
  .photography {
    &--padding {
      padding: 6rem;
    }
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .photo-container {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .photo-container {
    column-count: 2;
  }
}
</style>
