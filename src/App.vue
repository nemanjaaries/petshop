<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      valueDeterminate: 50
    };
  }
};
</script>
<style>
#app {
  background-color: white;
}
</style>
