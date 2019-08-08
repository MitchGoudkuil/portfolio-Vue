<template lang="html">
  <router-link :to="backLink" class="backbubble" :class="{ show }">
    <img src="../assets/backarrow.svg" alt="portfolio icon with bubble" />
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      backLink: "/"
    };
  },
  created() {
    if (
      this.$route.name === "frontend" ||
      this.$route.name === "design" ||
      this.$route.name === "photography"
    ) {
      this.backLink = "/portfolio";
    } else if (
      this.$route.name === "pokesearch" ||
      this.$route.name === "Snackbarthesmallfry" ||
      this.$route.name === "Overhoorbot" ||
      this.$route.name === "Mumblerun" ||
      this.$route.name === "Ux-Podcast" ||
      this.$route.name === "ObaDisneybooks" ||
      this.$route.name === "meetingrooms" ||
      this.$route.name === "embrace" ||
      this.$route.name === "wijncenter"
    ) {
      this.backLink = "/frontend";
    } else if (
      this.$route.name === "transavia" ||
      this.$route.name === "iamcore" ||
      this.$route.name === "sneakers" ||
      this.$route.name === "mpd"
    ) {
      this.backLink = "/design";
    } else {
      // console.log(this.$route.name + "error");
    }
  }
};
</script>

<style lang="scss" scoped>
.backbubble {
  position: fixed;
  top: -45px;
  left: 50%;
  margin-left: -40px;
  width: 80px;
  height: 90px;
  border-radius: 100%;
  background-color: #ff3268;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
  z-index: 99999;

  &:hover {
    img {
      transform: translateY(16px);
    }

    &::after {
      transform: scale(1.2);
    }
  }

  &:active {
    transform: scale(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 90px;
    background-color: rgba(255, 50, 110, 0.4);
    border-radius: 100%;
    z-index: -1;
    -webkit-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition: all 400ms cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1);
    -webkit-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -moz-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    -o-transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
    transition-timing-function: cubic-bezier(0.93, 0.01, 0.27, 1.65);
  }

  img {
    transition: 0.3s;
    width: 18px;
    transform: translateY(21px);
  }
}
</style>
