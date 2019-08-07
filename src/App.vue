<template>
  <div id="app">
    <topmenu />
    <transition name="fade">
      <router-view :key="$route.fullPath" />
    </transition>
    <MainNav />
    <circlemenu />
  </div>
</template>

<script>
import circlemenu from "./components/circlemenu.vue";
import topmenu from "./components/topmenu.vue";
import MainNav from "./components/main-nav.vue";

export default {
  name: "app",
  components: {
    circlemenu,
    topmenu,
    MainNav
  },
  data: function() {
    return {
      animationType: ""
    };
  },
  watch: {
    $route(to, from) {
      // console.log(from);
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/style.css";

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
