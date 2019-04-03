<template>
  <div class="blog">
    <v-container grid-list-xl>
      <BaseHeader light head="Blog" subhead="Podelite svoju pricu" />
      <v-layout row wrap justify-center>
        <v-flex v-for="(i, index) in 3" :key="index" xs12 sm6 md3>
          <BlogCardSmall />
        </v-flex>
        <v-flex xs12 class="text-xs-center mt-4 on-top">
          <v-btn router to="/blogs" outline large depressed round color="white">
            <span class="text-capitalize">Pogledajte</span>&nbsp;
            <span class="text-lowercase">sve</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import BlogCardSmall from "@/components/BlogCardSmall.vue";
export default {
  components: {
    BlogCardSmall
  }
};
</script>
<style scoped>
.blog {
  position: relative;
  padding: 40px 0;
  padding: 40px 0;
}
.blog::before {
  content: "";
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbabb70CLQfYSCekIRHB_AiE-E11CwzC4OKZEfMLEsfQITMsjjFw");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 1;
}

.blog::after {
  content: "";
  background-color: #1976d2;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 1;
}
.on-top {
  z-index: 2;
}
</style>
