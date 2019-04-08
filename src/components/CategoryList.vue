<template>
  <div>
    <p class="headline primary--text mb-3">Artikli</p>

    <ul class="category-list">
      <li
        v-for="(category, index) in categories"
        :key="index"
        
      >
        <p @click="search(category.katId)">{{ category.katNaziv }}</p>
        <ul>
          <li class="sub-category" v-for="(item, index) in category.podkatData" :key="index">
            {{ item.podNaziv }}
            <span class="right">({{ item.kolicina }})</span>
          </li>
        </ul>
        <div v-show="index != categories.length - 1" class="list-divider"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
    currentPage: Number,
    articlesPerPage: Number
  },
  methods: {
    search(cat_id) {
      // console.log(cat_id);
      this.$store.dispatch("fetchArticlesByCategory", {
        range: { start: 0, end: this.articlesPerPage },
        cat_id
      });
      this.$emit('resetCurrentPage');
      this.$emit('redirect', cat_id);
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

.sub-category:hover{
  font-weight: bold;
}

.list-divider {
  margin: 5px 0;
  padding: 0;
  background-color: #d6caca;
  height: 1px;
  max-width: 100px;
}
</style>
