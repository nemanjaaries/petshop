<template>
  <div>
    <p class="headline primary--text mb-3">Kategorije</p>

    <ul class="category-list">
      <li
        v-for="(category, index) in categories"
        :key="index"
        @click="search(category.id)"
      >
        <p>{{ category.title }}</p>
        <div class="list-divider"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
    currentPage: Number,
    blogsPerPage: Number
  },
  methods: {
    search(cat_id) {
      this.$store.dispatch("fetchBlogsByCategory", {
        range: { start: 0, end: this.blogsPerPage },
        cat_id
      });
    }
  }
};
</script>

<style scoped>
.category-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  max-width: 200px;
}
.category-list ul {
  padding-left: 1em;
  list-style-type: none;
  color: #9e9e9e;
}
.category-list ul li {
  cursor: pointer;
}
.category-list p {
  font-size: 1.3em;
  margin-bottom: 0.3em;
  cursor: pointer;
}
.category-list p:hover {
  color: #1976d2;
}

.list-divider {
  margin: 5px 0;
  padding: 0;
  background-color: #d6caca;
  height: 1px;
  width: 80%;
}
</style>
