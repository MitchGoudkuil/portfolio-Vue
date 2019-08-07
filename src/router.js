import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Portfolio from "./views/Portfolio.vue";
import Design from "./views/Design.vue";
import Frontend from "./views/Frontend.vue";
import Photography from "./views/Photography.vue";
import Error from "./views/Error.vue";

// Detail import
import Sneakers from "./views/Sneakers.vue";
import Transavia from "./views/Transavia.vue";
import Mpd from "./views/Mpd.vue";
import Iamcore from "./views/Iamcore.vue";
import Pokedex from "./views/Pokedex.vue";
import Embrace from "./views/Embrace.vue";
import Cssres from "./views/Cssres.vue";
import Overhoorbot from "./views/Overhoorbot.vue";
import Meetingrooms from "./views/Meetingrooms.vue";
import Mumble from "./views/Mumble.vue";
import Podcast from "./views/Podcast.vue";
import Data from "./views/Data.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "*",
      name: "404",
      component: Error
    },
    {
      path: "/design",
      name: "design",
      component: Design
    },
    {
      path: "/photography",
      name: "photography",
      component: Photography
    },
    {
      path: "/frontend",
      name: "frontend",
      component: Frontend
    },
    {
      path: "/design/sneakers",
      name: "sneakers",
      component: Sneakers
    },
    {
      path: "/design/transavia",
      name: "transavia",
      component: Transavia
    },
    {
      path: "/design/iamcore",
      name: "iamcore",
      component: Iamcore
    },
    {
      path: "/design/mpd",
      name: "mpd",
      component: Mpd
    },
    {
      path: "/frontend/pokesearch",
      name: "pokesearch",
      component: Pokedex
    },
    {
      path: "/frontend/cssres",
      name: "Snackbarthesmallfry",
      component: Cssres
    },
    {
      path: "/frontend/overhoorbot",
      name: "Overhoorbot",
      component: Overhoorbot
    },
    {
      path: "/frontend/mumblerun",
      name: "Mumblerun",
      component: Mumble
    },
    {
      path: "/frontend/ux-podcast",
      name: "Ux-Podcast",
      component: Podcast
    },
    {
      path: "/frontend/frontenddata",
      name: "ObaDisneybooks",
      component: Data
    },
    {
      path: "/frontend/meetingrooms",
      name: "meetingrooms",
      component: Meetingrooms
    },
    {
      path: "/frontend/embrace",
      name: "embrace",
      component: Embrace
    }
  ]
});
