<template lang="html">
  <section>
    <div v-for="data in titleData" :key="data.id" class="full-block bottom">
      <div class="full-block__left">
        <h1 v-if="data.title">{{ data.title }}</h1>
        <h2 v-if="data.smallTitle">{{ data.smallTitle }}</h2>

        <h4 class="bottom--padding" v-if="data.subTitle">
          {{ data.subTitle }}
        </h4>
        <p v-if="data.text">
          {{ data.text }}
        </p>
        <a v-if="data.link" :href="data.ghLink" target="_blank">{{
          data.linkText
        }}</a>
      </div>
      <div class="full-block__right">
        <img
          v-if="data.imageName"
          :src="require(`@/assets/${data.imageName}`)"
          :alt="data.imageAlt"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["titleData"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.full-block {
  display: block;
  align-items: center;

  img {
    border-radius: 10px;
    margin-top: 2rem;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  }

  a {
    color: #9744fa;
  }

  &__left {
    width: 100%;
    padding-right: 0rem;

    h1 {
      padding-bottom: 0;
    }

    h2 {
      color: #ff3268;
      padding-bottom: 0.8em;
    }
  }

  &__right {
    width: 100%;
    img {
      width: 100%;
    }
  }

  &__image {
    width: 100%;
  }

  &--padding {
    padding: 4rem;
    padding-top: 8rem;
  }
}

.bottom {
  margin-bottom: 6rem;

  &--padding {
    padding-bottom: 0.3em;
  }
}

@media only screen and (min-width: 1024px) {
  .full-block {
    display: flex;
    align-items: center;

    img {
      margin-top: 0rem;
    }

    &__left {
      width: 40%;
      padding-right: 2rem;
    }
    &__right {
      width: 60%;
    }
    &--padding {
      padding: 8rem;
    }
  }
}
</style>
