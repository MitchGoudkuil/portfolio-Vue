<template>
  <div id="main-nav" class="main-nav">
    <transition name="slide-fade">
      <div class="main-nav__item">
        <router-link
          :class="{ active: show, leftshow: leftShow }"
          class="link contact"
          :to="leftLink"
          >{{ leftLinkText }}</router-link
        >
      </div>
    </transition>
    <div class="main-nav__item">
      <router-link
        :class="{ active: show, rightshow: rightShow }"
        class="link about"
        :to="rightLink"
        >{{ rightLinkText }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftLinkText: "Contact me",
      rightLinkText: "About me",
      leftLink: "/contact",
      rightLink: "/about",
      show: false,
      leftShow: false,
      rightShow: false
    };
  },
  watch: {
    $route(to) {
      if (to.name === "home") {
        this.rightLink = "/about";
        this.rightLinkText = "About me";
        this.leftLink = "/contact";
        this.leftLinkText = "Contact me";
        this.show = false;
        this.rightShow = false;
        this.leftShow = false;
      } else if (to.name === "about") {
        this.rightLink = "";
        this.rightLinkText = "";
        this.leftLink = "/";
        this.leftLinkText = "Back to home";
        this.rightShow = true;
      } else if (to.name === "contact") {
        this.rightLink = "/";
        this.rightLinkText = "Back to home";
        this.leftLink = "";
        this.leftLinkText = "";
        this.leftShow = true;
      } else if (to.name === "portfolio") {
        this.rightLink = "";
        this.rightLinkText = "";
        this.leftLink = "";
        this.leftLinkText = "";
        this.show = true;
      } else if (to.name === "design") {
        this.rightLink = "/photography";
        this.rightLinkText = "Photography";
        this.leftLink = "/frontend";
        this.leftLinkText = "Front-end";
        this.show = false;
      } else if (to.name === "photography") {
        this.rightLink = "/frontend";
        this.rightLinkText = "Frontend";
        this.leftLink = "/design";
        this.leftLinkText = "Design";
        this.show = false;
      } else if (to.name === "frontend") {
        this.rightLink = "/design";
        this.rightLinkText = "Design";
        this.leftLink = "/photography";
        this.leftLinkText = "Photography";
        this.show = false;
      } else if (
        to.name === "pokesearch" ||
        to.name === "Snackbarthesmallfry" ||
        to.name === "Overhoorbot" ||
        to.name === "Mumblerun" ||
        to.name === "Ux-Podcast" ||
        to.name === "ObaDisneybooks" ||
        to.name === "meetingrooms" ||
        to.name === "transavia" ||
        to.name === "iamcore" ||
        to.name === "sneakers" ||
        to.name === "mpd"
      ) {
        this.rightLink = "";
        this.rightLinkText = "";
        this.leftLink = "";
        this.leftLinkText = "";
        this.show = true;
      }
    }
  },
  created() {
    this.update();
  },
  methods: {
    update: function() {
      if (this.$route.name === "home") {
        this.rightLink = "/about";
        this.rightLinkText = "About me";
        this.leftLink = "/contact";
        this.leftLinkText = "Contact me";
        this.show = false;
        this.rightShow = false;
        this.leftShow = false;
      } else if (this.$route.name === "about") {
        this.rightLink = "";
        this.rightLinkText = "";
        this.leftLink = "/";
        this.leftLinkText = "Back to home";
        this.rightShow = true;
      } else if (this.$route.name === "contact") {
        this.rightLink = "/";
        this.rightLinkText = "Back to home";
        this.leftLink = "";
        this.leftLinkText = "";
        this.leftShow = true;
      } else if (this.$route.name === "design") {
        this.rightLink = "/photography";
        this.rightLinkText = "Photography";
        this.leftLink = "/frontend";
        this.leftLinkText = "Front-end";
        this.show = false;
      } else if (this.$route.name === "photography") {
        this.rightLink = "/frontend";
        this.rightLinkText = "Frontend";
        this.leftLink = "/design";
        this.leftLinkText = "Design";
        this.show = false;
      } else if (this.$route.name === "portfolio") {
        this.rightLink = "";
        this.rightLinkText = "";
        this.leftLink = "";
        this.leftLinkText = "";
        this.show = true;
      } else if (this.$route.name === "frontend") {
        this.rightLink = "/design";
        this.rightLinkText = "Design";
        this.leftLink = "/photography";
        this.leftLinkText = "Photography";
        this.show = false;
      } else if (
        this.$route.name === "pokesearch" ||
        this.$route.name === "Snackbarthesmallfry" ||
        this.$route.name === "Overhoorbot" ||
        this.$route.name === "Mumblerun" ||
        this.$route.name === "Ux-Podcast" ||
        this.$route.name === "ObaDisneybooks" ||
        this.$route.name === "meetingrooms" ||
        this.$route.name === "transavia" ||
        this.$route.name === "iamcore" ||
        this.$route.name === "sneakers" ||
        this.$route.name === "mpd"
      ) {
        this.rightLink = "";
        this.rightLinkText = "";
        this.leftLink = "";
        this.leftLinkText = "";
        this.show = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-nav {
  display: flex;

  .contact {
    position: fixed;
    top: 50%;
    left: 0;
    z-index: 99999;
    height: 60px;
    line-height: 60px;
    -webkit-transform-origin: 0 50%;
    -moz-transform-origin: 0 50%;
    -ms-transform-origin: 0 50%;
    -o-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform: rotate(-90deg) translate(-50%, 50%);
    -moz-transform: rotate(-90deg) translate(-50%, 50%);
    -ms-transform: rotate(-90deg) translate(-50%, 50%);
    -o-transform: rotate(-90deg) translate(-50%, 50%);
    transform: rotate(-90deg) translate(-50%, 50%);
  }

  .about {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 99999;
    height: 60px;
    line-height: 60px;
    -webkit-transform-origin: 100% 50%;
    -moz-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    -o-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: rotate(90deg) translate(50%, 50%);
    -moz-transform: rotate(90deg) translate(50%, 50%);
    -ms-transform: rotate(90deg) translate(50%, 50%);
    -o-transform: rotate(90deg) translate(50%, 50%);
    transform: rotate(90deg) translate(50%, 50%);
  }
}

.disabled {
  height: 200px;
  width: 2px;
  background-color: green;
  transform: rotate(90deg);
}

.link {
  font-weight: 800;
  font-size: 16px;
}

.active {
  display: none;
}

.show {
  display: none;
}

.rightshow {
  display: none;
}

.leftshow {
  display: none;
}

@media only screen and (max-width: 600px) {
  .main-nav {
    .contact {
      top: 50%;
      background-color: #000;
      color: #fff;
      padding: 0 1.5em;
      height: 40px;
      line-height: 40px;
      border-radius: 0 0 20px 20px;
      -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    }
    .about {
      top: 50%;
      background-color: #000;
      color: #fff;
      padding: 0 1.5em;
      height: 40px;
      line-height: 40px;
      border-radius: 0 0 20px 20px;
      -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
