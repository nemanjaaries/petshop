<template>
  <div class="articles">
    <v-container>
      <BaseHeader :head="blog.title" subhead />
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
              <v-flex>
                <v-img
              src="https://i.pinimg.com/originals/f5/23/ac/f523acccd59ce28b8743158194b3487d.jpg"
              aspect-ratio="2.5"
              position="center center"
              class="mb-2"
            ></v-img>
                <p>{{blog.text}}</p>
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

import { mapState, mapGetters } from "vuex";
export default {
  props:["id"],
  components: {
    BlogCategoryList,
    BlogCategoriesDialog
  },
  data() {
    return {
      dialog: false,
      currentPage: 1,
      blogsPerPage: 3,
      items: [
        { text: "cena rastuce", value: 0 },
        { text: "cena opadajuce", value: 1 }
      ],
      window: {
        height: 0,
        width: 0
      },
     
    };
  },
  computed: {
    //...mapState(["blogs", "blogsDisplay", "blogCategories"]),
    ...mapState({
      blog: state => state.blog.blog,
      blogCategories: state => state.blog.blogCategories
    })
  },
  created() {
    // this.$store.dispatch("fetchArticles", {
    //   perPage: this.articlesPerPage,
    //   page: this.curentPage
    // });

    this.$store.dispatch("fetchBlog", this.id);

    this.$store.dispatch("fetchBlogCategories");
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
