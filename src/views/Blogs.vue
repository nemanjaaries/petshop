<template>
  <div class="articles">
    <v-container>
      <BaseHeader head="Nasi blogovi" subhead />
      <v-layout row wrap>
        <v-flex xs12 hidden-md-and-up class="text-xs-center">
          <BlogCategoriesDialog
            :categories="blogCategories"
            :currentPage="currentPage"
            :blogsPerPage="blogsPerPage"
          />
        </v-flex>
        <v-flex md2 hidden-sm-and-down>
          <BlogCategoryList
            :categories="blogCategories"
            :currentPage="currentPage"
            :blogsPerPage="blogsPerPage"
          />
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 md10>
          <v-container fluid pa-0>
            <v-layout column wrap>
              <v-flex
                v-for="(blog, index) in blogsDisplay"
                :key="index"
                d-flex
                xs12
                sm6
                md4
              >
                <BlogCardLarge :blog="blog" />
              </v-flex>
              <v-flex xs12>
                <div class="text-xs-center">
                  <v-pagination
                    v-if="pages > 1"
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
import BlogCategoryList from "@/components/BlogCategoryList.vue";
import BlogCategoriesDialog from "@/components/BlogCategoriesDialog.vue";
import BlogCardLarge from "@/components/BlogCardLarge.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    BlogCategoryList,
    BlogCardLarge,
    BlogCategoriesDialog
  },
  data() {
    return {
      dialog: false,

      items: [
        { text: "cena rastuce", value: 0 },
        { text: "cena opadajuce", value: 1 }
      ],
      window: {
        height: 0,
        width: 0
      },
      currentPage: 1,
      blogsPerPage: 3
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.blogs.length / this.blogsPerPage);
    },
    pageRange() {
      return {
        start: this.currentPage * this.blogsPerPage - this.blogsPerPage,
        end: this.currentPage * this.blogsPerPage
      };
    },
    ...mapState(["blogs", "blogsDisplay", "blogCategories"]),
    ...mapGetters([])
  },
  created() {
    // this.$store.dispatch("fetchArticles", {
    //   perPage: this.articlesPerPage,
    //   page: this.curentPage
    // });

    this.$store.dispatch("fetchBlogs", this.pageRange);

    //this.$store.dispatch("fetchBlogCategories");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    setPage() {
      // this.$store.dispatch("fetchArticles", {
      //   perPage: this.articlesPerPage,
      //   page: this.curentPage
      // });
      this.$store.dispatch("paginateBlogs", this.pageRange);
      window.scrollTo(0, 0);
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
