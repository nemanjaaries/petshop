<template>
  <div class="jumbotron">
    <v-container>
      <v-layout row class="content" align-center justify-start>
        <v-flex class="message">
          <div>
            <h1 class="display-3">Tacin 5 SHOP</h1>
            <p class="mt-2 mb-2 pa-0 primary--text headline">
              sest godina sa vama
            </p>
            <div class="divider"></div>
            <p class="pa-0 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              totam atque sed accusantium, itaque suscipit nihil dolores
              voluptates vero, pariatur nulla expedita alias reiciendis velit
              quisquam delectus adipisci. Nisi, autem?
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.jumbotron {
  background-color: blue;
  background-image: url("http://digitaldoggydaily.com/wp-content/uploads/2016/12/bring-a-new-puppy.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 600px;
  border-radius: 0 0 50% 50%/15%;
}

.divider {
  height: 2px;
  background-color: gray;
}
.content {
  height: 500px;
  color: white;
}

.message {
  max-width: 400px;
}
</style>
