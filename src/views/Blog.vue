<template>
  <div class="blog">
    <v-container grid-list-xl>
      <BaseHeader light head="Blog" subhead="Podelite svoju pricu" />
      <v-layout row wrap justify-center>
        <v-flex v-for="(i, index) in 3" :key="index" xs12 sm6 md3>
          <v-card class="on-top ma-1">
            <v-img src="racoon.jpg" aspect-ratio="1.25"></v-img>

            <v-card-title primary-title class="text-xs-left">
              <span class="grey--text">21.06.2018.</span>
              <br />
              <div>
                <h3 class="headline mt-1 mb-3 font-weight-medium">
                  Naslov lorem ipsum
                </h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  officia voluptatem dolorum expedita atque excepturi. Soluta
                  ipsum dolor magnam voluptatem dolorum expedita impedit id
                  numquam?
                </div>
              </div>
            </v-card-title>

            <v-card-actions class="px-0">
              <v-btn flat color="primary" class="font-weight-medium"
                >Procitajte vise</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 class="text-xs-center mt-4 on-top">
          <v-btn outline large depressed round color="white">
            <span class="text-capitalize">Procitaj</span>&nbsp;
            <span class="text-lowercase">sve</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script></script>
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
