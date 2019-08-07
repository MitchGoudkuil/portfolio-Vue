<template>
  <div class="contact">
    <div class="center">
      <div class="center__stripes"></div>
      <div class="center__title">
        <h1>Contact me!</h1>
        <h2>Would be fun...</h2>
      </div>
      <p>
        Need a designer, illustrator, front-end developer or just a friend?
      </p>
      <p>Hit me up and let’s grab a coffee.</p>
      <p>I'm always up for a challenge!</p>
      <div class="center__email">
        <p>mitch_goudkuil@hotmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  components: {},
  beforeCreate() {
    document.body.className = "contact";
  }
};
</script>

<style lang="scss" scoped>
.contact {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  color: #ff3268;
}

.center {
  position: relative;
  max-width: 500px;
  width: 100%;

  &__title {
    display: flex;
    align-items: flex-end;
    margin-bottom: 0.4rem;

    h2 {
      margin-left: 0.2rem;
    }
  }

  &__stripes {
    position: absolute;
    z-index: -1;
    top: -7rem;
    left: -4rem;
    width: 225px;
    height: 350px;
    overflow: hidden;
    background: gray url(../assets/stripes.svg) repeat 0 0;
    background-size: 30px;
    -webkit-animation: slide 10s linear infinite;
  }

  @-webkit-keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -300px 0;
    }
  }

  &__email {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.4rem 1rem;
    background-color: #9744fa;

    p {
      color: #fff;
    }
  }
}

@media only screen and (max-width: 600px) {
  .contact {
    max-width: 90%;
    padding: 3em;
  }

  .center {
    text-align: left;
    &__title {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
