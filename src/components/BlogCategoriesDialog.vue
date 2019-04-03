<template>
  <v-dialog
    v-model="blogDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" block round color="primary">filteri</v-btn>
    </template>
    <v-card>
      <div class="close-bar">
        <v-icon
          large
          class="right font-weight-bold pa-2"
          d-block
          @click="blogDialog = false"
          >close</v-icon
        >
      </div>

      <ul class="categories-list">
        <li
          v-for="(category, index) in categories"
          :key="index"
          @click="search(category.id)"
        >
          <p>{{ category.title }}</p>
          <div class="list-divider"></div>
        </li>
      </ul>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    categories: Array,
    currentPage: Number,
    blogsPerPage: Number
  },
  data() {
    return {
      blogDialog: false
    };
  },
  methods: {
    search(cat_id) {
      this.$store.dispatch("fetchBlogsByCategory", {
        range: { start: 0, end: this.blogsPerPage },
        cat_id
      });
      this.blogDialog = false;
    }
  }
};
</script>

<style scoped>
.close-bar {
  height: 50px;
}
.subheader {
  font-size: 1.5em;
  padding: 0 24px;
}
.categories-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.categories-list ul {
  padding-left: 1em;
  list-style-type: none;
  color: #9e9e9e;
}
.categories-list ul li {
  cursor: pointer;
}
.categories-list p {
  text-align: center;
  font-size: 1.3em;
  margin-bottom: 0.3em;
  cursor: pointer;
  padding: 10px;
}
.categories-list p:hover {
  color: #1976d2;
}

.list-divider {
  margin: 5px 0;
  padding: 0;
  background-color: #d6caca;
  height: 1px;
}
</style>
