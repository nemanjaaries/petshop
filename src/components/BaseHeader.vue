<template>
  <div>
    <v-layout row justify-center class="text-xs-center">
      <v-flex
        class="mb-4"
        :class="{ 'grey--text': !light, 'white--text': light }"
      >
        <h1 class="header headline text-uppercase">{{ head }}</h1>
        <p class="subheader subheading mt-2">{{ subhead }}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    head: String,
    subhead: String,
    light: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: Number,
      default: null
    }
  }
};
</script>

<style scoped>
.rel {
  position: relative;
}
.header {
  position: relative;
  z-index: 100;
}
.header:after {
  /* z-index: 100; */
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  padding-top: 5px;
  border-bottom: 2px solid gray;
}
.header::before {
  /* z-index: 100; */
  content: "";
  display: block;
  position: relative;
  top: 44px;
  left: 46%;
  width: 8%;
  padding-top: 5px;
  border-bottom: 5px solid #1976d2;
  border-radius: 4px;
}
.subheader {
  position: relative;
  z-index: 100;
}
</style>
