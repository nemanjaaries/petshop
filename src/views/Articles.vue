<template>
  <div class="articles">
    <v-container>
      <BaseHeader head="Nasi proizvodi" subhead="Dugogodisnji kvalitet!" />
      <v-layout row wrap>
        <v-flex xs12 hidden-md-and-up class="text-xs-center">
          <CategoriesDialog :categories="articleCategories" />
        </v-flex>
        <v-flex md2 hidden-sm-and-down>
          <CategoryList :categories="articleCategories" />
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 md9>
          <v-container fluid grid-list-xl pa-0>
            <v-layout row wrap>
              <v-flex xs12 small class="text-xs-right">
                <v-select
                  @input="sort"
                  :items="items"
                  label="Sortiraj"
                  full-width
                  outline
                  class="select"
                ></v-select>
              </v-flex>
              <v-flex
                v-for="(article, index) in articlesDisplay"
                :key="index"
                d-flex
                xs12
                sm6
                md4
              >
                <ArticleCard :article="article" />
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center">
                  <v-pagination
                    @input="setPage"
                    v-model="currentPage"
                    :length="pages"
                  ></v-pagination>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import CategoriesDialog from "@/components/CategoriesDialog.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    CategoryList,
    ArticleCard,
    CategoriesDialog
  },
  data() {
    return {
      items: [
        { text: "cena rastuce", value: 0 },
        { text: "cena opadajuce", value: 1 }
      ],
      window: {
        height: 0,
        width: 0
      },
      currentPage: 1,
      articlesPerPage: 6
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.articles.length / this.articlesPerPage);
    },
    pageRange() {
      return {
        start: this.currentPage * this.articlesPerPage - this.articlesPerPage,
        end: this.currentPage * this.articlesPerPage
      };
    },
    ...mapState([
      "articles",
      "articlesDisplay",
      "articlesTotal",
      "articleCategories"
    ]),
    ...mapGetters([])
  },
  created() {
    // this.$store.dispatch("fetchArticles", {
    //   perPage: this.articlesPerPage,
    //   page: this.curentPage
    // });

    this.$store.dispatch("fetchArticles", this.pageRange);

    this.$store.dispatch("fetchArticleCategories");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    sort(param) {
      this.$store.dispatch("sortArticlesByPrice", {
        param,
        range: this.pageRange
      });
    },
    setPage() {
      // this.$store.dispatch("fetchArticles", {
      //   perPage: this.articlesPerPage,
      //   page: this.curentPage
      // });
      this.$store.dispatch("paginateArticles", this.pageRange);
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (window.innerWidth > 640) {
        this.dialog = false;
      }
    }
  }
};
</script>
<style scoped>
.articles {
  padding: 40px 0;
}
.select {
  width: 100%;
  float: right;
  color: red;
}

@media screen and (max-width: 700px) {
  .select {
    width: 100%;
    float: right;
  }
}
</style>
