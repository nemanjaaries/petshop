<template>
  <v-card router :to="route" class="card">
    <v-img
      contain
      src="https://img2.wantitall.co.za/prodimages/aizara-durable-dog-chew-toys-puppy-chew-toys-tough-rubber-dog-chew-bones-toys-for-large-small-dogs-i__41sgI5kHjfL.jpg"
      aspect-ratio="2.3"
    ></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="title indigo--text">{{ article.title }}</h3>
        <h3 class="title mb-2 indigo--text">{{ article.color }}</h3>
        <p class="headline font-weight-bold primary--text ma-0">
          {{ article.price }} RSD
        </p>
        <p class="ma-0 subheading grey--text font-weight-medium">
          <strike>{{ article.oldPrice }} RSD</strike>
        </p>

        <p v-if="article.inStock" class="mt-3">
          <v-icon
            small
            dark
            class="success font-weight-bold"
            style="border-radius: 50%;"
            >done</v-icon
          >

          <span class="caption font-weight-bold grey--text pa-1"
            >Ima na stanju</span
          >
        </p>
        <p v-else class="mt-3">
          <v-icon
            small
            dark
            class="error font-weight-bold"
            style="border-radius: 50%;"
            >close</v-icon
          >

          <span class="caption font-weight-bold grey--text pa-1"
            >Nema na stanju</span
          >
        </p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    article: Object
  },
  computed: {
    route() {
      return "/article/" + this.article.id;
    }
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.card:hover {
  transform: translateY(-3px);
}
</style>
