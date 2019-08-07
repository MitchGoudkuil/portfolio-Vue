<template>
  <section class="pokedex">
    <BackCircle />
    <h1>{{ pageId }}</h1>
  </section>
</template>

<script>
import BackCircle from "../components/Backcircle.vue";
import FroData from "../assets/frontend-data.json";
export default {
  name: "portfolio",
  components: {
    BackCircle
  },
  data() {
    return {
      pageId: this.$route.name,
      frontJson: FroData,
      bigDesciption: "",
      Bimage: ""
    };
  },
  beforeCreate() {
    document.body.className = "subject-fixed frontend";
  },
  created() {
    let pageName = this.$route.name;
    let parsedData = JSON.parse(JSON.stringify(this.frontJson));
    let filteredItem = Object.entries(parsedData).filter(function(n) {
      let filterTitle = n[1].Title;
      return filterTitle.toLowerCase() === pageName;
    });
    // console.log(filteredItem);
  }
};
</script>

<style lang="scss" scoped>
.pokedex {
  width: 100vw;
  height: 100%;
  padding: 5rem;

  &__image {
    width: 100%;
  }
}

h1 {
  padding-bottom: 0.5rem;
}
</style>
