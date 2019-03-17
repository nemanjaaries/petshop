<template>
  <v-container class="pa-0 navigation">
    <nav>
      <v-toolbar flat color="white">
        <v-toolbar-side-icon
          class="hidden-md-and-up"
          @click="drawer = true"
        ></v-toolbar-side-icon>
        <v-toolbar-title>
          <!-- <img src="logo.png" width="200" /> -->
          <h1>Logo</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-md-and-down">
          <v-btn
            :ripple="false"
            class="custom-btn font-weight-bold"
            flat
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
            >{{ link.title }}</v-btn
          >
        </v-toolbar-items>
        <div class="hidden-md-and-down ml-5">
          <v-btn class="px-4" small depressed round color="primary"
            >uloguj se</v-btn
          >
          <v-btn class="px-4" outline small depressed round color="primary"
            >prijavi se</v-btn
          >
        </div>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" clipped class="primary on-top">
        <v-list dark>
          <v-list-tile
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-tile-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text text-capitalize">
                {{ link.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "pocetna", route: "/index", icon: "home" },
        { title: "o nama", route: "/about", icon: "location_city" },
        { title: "artikli", route: "/articles", icon: "work_outline" },
        { title: "blog", route: "/blog", icon: "description" },
        { title: "kontakt", route: "/contact", icon: "contacts" }
      ]
    };
  }
};
</script>

<style scoped>
.navigation {
  max-height: 64px;
}
.custom-btn::before {
  color: transparent;
}

.custom-btn:hover {
  color: #1976d2;
}
.on-top {
  z-index: 1000;
}
</style>
