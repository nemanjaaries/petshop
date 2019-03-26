<template>
  <v-container class="pa-0 navigation">
    <nav>
      <v-toolbar flat color="white">
        <v-toolbar-side-icon
          class="hidden-lg-and-up"
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
        <div class="hidden-sm-and-down ml-5">
          <LoginForm />
          <RegisterForm />
        </div>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" clipped class="white on-top">
        <v-list>
          <div class="mb-3">
            <LoginForm />
            <RegisterForm />
          </div>

          <v-list-tile
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-tile-action>
              <v-icon class="primary--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text text-capitalize">{{
                link.title
              }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: {
    LoginForm,
    RegisterForm
  },
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
@media screen and (min-width: 600px) {
}
</style>
