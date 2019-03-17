<template>
  <div class="articles">
    <v-container>
      <BaseHeader head="Nasi proizvodi" subhead="Dugogodisnji kvalitet!" />

      <v-layout row wrap>
        <v-flex xs12 hidden-md-and-up class="text-xs-center">
          <v-dialog
            v-model="dialog"
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
                  @click="dialog = false"
                  >close</v-icon
                >
              </div>

              <p class="subheader">Filteri</p>

              <v-expansion-panel>
                <v-expansion-panel-content
                  v-for="(item, index) in categories"
                  :key="index"
                >
                  <template v-slot:header>
                    <div>{{ item.title }}</div>
                  </template>
                  <v-card>
                    <v-card-text
                      class="px-5"
                      v-for="(item, index) in item.items"
                      :key="index"
                      >{{ item.title }}</v-card-text
                    >
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex md2 hidden-sm-and-down>
          <CategoryList :categories="categories" />
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
export default {
  components: {
    CategoryList,
    ArticleCard
  },
  data() {
    return {
      window: {
        height: 0,
        width: 0
      },
      dialog: false,
      categories: [
        {
          title: "Psi",
          items: [
            { title: "Igracke", items: ["riblja kost", "klupko", "lopatica"] },
            { title: "Hrana", items: ["riblja kost", "klupko", "lopatica"] }
          ]
        },
        {
          title: "Macke",
          items: [
            {
              title: "Igracke",
              items: [
                "riblja kost",
                "klupko",
                "lopatica",
                "riblja kost",
                "klupko",
                "lopatica"
              ]
            },
            { title: "Hrana", items: ["riblja kost", "klupko", "lopatica"] }
          ]
        },
        {
          title: "Ptice",
          items: [
            { title: "Igracke", items: ["riblja kost", "klupko", "lopatica"] },
            { title: "Hrana", items: ["riblja kost", "klupko", "lopatica"] }
          ]
        },
        {
          title: "Sitne zivotinje",
          items: [
            { title: "Igracke", items: ["riblja kost", "klupko", "lopatica"] },
            { title: "Hrana", items: ["riblja kost", "klupko", "lopatica"] }
          ]
        }
      ],
      articles: [
        {
          title: "Gummy Bones Dog Toy",
          color: "Color Varies",
          price: 890,
          oldPrice: 980,
          inStock: true
        },
        {
          title: "Cotton Rope with Bones Dog Toy",
          color: "Color Varies",
          price: 540,
          oldPrice: 770,
          inStock: false
        },
        {
          title: "Gummy Bones Dog Toy",
          color: "Color Varies",
          price: 890,
          oldPrice: 980,
          inStock: true
        },
        {
          title: "Gummy Bones Dog Toy",
          color: "Color Varies",
          price: 890,
          oldPrice: 980,
          inStock: true
        },
        {
          title: "Cotton Rope with Bones Dog Toy",
          color: "Color Varies",
          price: 540,
          oldPrice: 770,
          inStock: true
        },
        {
          title: "Gummy Bones Dog Toy",
          color: "Color Varies",
          price: 890,
          oldPrice: 980,
          inStock: true
        }
      ]
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
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
.close-bar {
  height: 50px;
}
.subheader {
  font-size: 1.5em;
  padding: 0 24px;
}
</style>
