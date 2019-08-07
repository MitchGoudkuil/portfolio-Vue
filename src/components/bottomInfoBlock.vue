<template lang="html">
  <section>
    <div v-for="data in blockInfoData" :key="data.id" class="bottom-info-block">
      <div class="bottom-info-block__middle">
        <h4>{{ data.title }}</h4>
        <p>
          {{ data.text }}
        </p>
      </div>
    </div>
    <!-- <div
      v-for="data in blockInfoData"
      :key="data.id"
      class="full-block bottom"
    ></div> -->
  </section>
</template>

<script>
export default {
  props: ["blockInfoData"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bottom-info-block {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d1d1d;
  padding: 2rem;
  border-radius: 2em;

  h4 {
    color: #fff;
    padding-bottom: 0.3rem;
    text-transform: capitalize;
  }

  p {
    color: #fff;
  }

  &__middle {
    width: 100%;
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

@media only screen and (max-width: 600px) {
}

@media only screen and (min-width: 1024px) {
  .bottom-info-block {
    &__middle {
      width: 50%;
    }
  }
}
</style>
