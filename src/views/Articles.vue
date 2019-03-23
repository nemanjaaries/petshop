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
              <v-flex
                v-for="(article, index) in articles"
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
                    v-model="curentPage"
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
import { mapState } from "vuex";
export default {
  components: {
    CategoryList,
    ArticleCard,
    CategoriesDialog
  },
  data() {
    return {
      window: {
        height: 0,
        width: 0
      },
      curentPage: 1,
      articlesPerPage: 6
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.articlesTotal / this.articlesPerPage);
    },
    ...mapState(["articles", "articlesTotal", "articleCategories"])
  },
  created() {
    this.$store.dispatch("fetchArticles", {
      perPage: this.articlesPerPage,
      page: this.curentPage
    });
    this.$store.dispatch("fetchArticleCategories");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    setPage() {
      this.$store.dispatch("fetchArticles", {
        perPage: this.articlesPerPage,
        page: this.curentPage
      });
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
</style>
