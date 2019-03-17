<template>
  <div>
    <Jumbotron />
    <div class="home">
      <v-container>
        <BaseHeader head="O nama" subhead="6 godina sa vama" />
        <v-layout row justify-center>
          <v-flex class="content">
            <div>
              <p class="pa-0 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores qui repellendus doloribus rerum mollitia, temporibus
                .
              </p>
              <p class="pa-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                voluptates aliquid similique eaque distinctio cupiditate
                corrupti quam non, consectetur labore unde. Ipsa deleniti eius
                reiciendis doloribus laboriosam provident maiores dolore
                assumenda tenetur et? Doloribus nesciunt provident cupiditate
                dignissimos mollitia asperiores iste fugit, ex eveniet soluta
                culpa odit quisquam incidunt porro.
              </p>
              <v-btn
                large
                depressed
                round
                color="primary"
                router
                :to="`/about`"
              >
                <span class="text-capitalize">Procitajte</span>&nbsp;
                <span class="text-lowercase">vise</span>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
export default {
  components: {
    Jumbotron
  }
};
</script>
<style scoped>
.home {
  background-image: url("http://www.stickpng.com/assets/images/5a00520e092a74e5b928e76a.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 275px 275px;
  padding: 40px 0;
}
.content {
  max-width: 600px;
  text-align: center;
}
</style>
