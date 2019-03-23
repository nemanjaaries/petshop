<template>
  <div class="articles">
    <v-container>
      <BaseHeader :head="article.title" subhead="provereno" />
      <v-layout row wrap>
        <v-flex xs12 hidden-md-and-up class="text-xs-center">
          <CategoriesDialog :categories="articleCategories" />
        </v-flex>
        <v-flex md2 hidden-sm-and-down>
          <CategoryList :categories="articleCategories" />
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 md10>
          <v-container fluid grid-list-xs pa-0>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-img
                  src="https://bethlehemplace.org/wp-content/uploads/2013/06/197367.jpg"
                  contain
                  max-width="700"
                  max-height="500"
                ></v-img>
              </v-flex>
              <v-flex xs12 sm6>
                <v-layout align-start justify-space-between column fill-height>
                  <v-flex class="xs8">
                    <p class="subheading" v-if="article.inStock">
                      <v-icon color="primary">done</v-icon>
                      <span class="pl-2">Na stanju</span>
                    </p>
                    <p class="subheading" v-else>
                      <v-icon color="error">close</v-icon>
                      <span class="pl-2">Nema na stanju</span>
                    </p>
                    <p class="subheading">
                      <v-icon color="primary">access_time</v-icon>
                      <span class="pl-2">Ocekivani rok isporuke</span>
                      <span class="ml-4 pl-2 d-block primary--text"
                        >2 radna dana</span
                      >
                    </p>
                  </v-flex>
                  <v-flex class="xs2">
                    <p>{{ article.shortDescription }}</p>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex class="xs2">
                    <p class="display-3 primary--text">
                      Cena: {{ article.price }} din.
                    </p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex class="xs12 py-4 divider"></v-flex>
              <v-flex class="xs12 md6 mt-4">
                <v-tabs v-model="article.model">
                  <v-tab
                    v-for="(desc, index) in article.descriptions"
                    :key="index"
                    :href="`#tab-${index}`"
                    >{{ desc.title }}</v-tab
                  >
                </v-tabs>
                <v-tabs-items v-model="article.model">
                  <v-tab-item
                    v-for="(desc, index) in article.descriptions"
                    :key="index"
                    :value="`tab-${index}`"
                  >
                    <v-card flat>
                      <v-card-text v-text="desc.text"></v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-flex>
              <v-flex class="xs12 md6 mt-4">
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  class="elevation-0"
                >
                  <template v-slot:items="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                  </template>
                </v-data-table>
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
import CategoriesDialog from "@/components/CategoriesDialog.vue";

import { mapState } from "vuex";
export default {
  props: ["id"],
  components: {
    CategoryList,
    CategoriesDialog
  },
  data() {
    return {
      window: {
        height: 0,
        width: 0
      },
      dialog: false,

      headers: [
        {
          text: "Dessert",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "(100g serving)",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "(150g serving)",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "(200g serving)",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "(250g serving)",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "(300g serving)",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "(350g serving)",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "(400g serving)",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "(450g serving)",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "(500g serving)",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        }
      ]
    };
  },
  computed: {
    ...mapState(["articleCategories", "article"])
  },
  created() {
    this.$store.dispatch("fetchArticleCategories");
    this.$store.dispatch("fetchArticle", this.id);
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
