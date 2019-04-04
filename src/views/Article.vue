<template>
  <div class="articles">
    <v-container>
      <BaseHeader :head="article.pro_naziv" subhead="provereno" />
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
                    <p>{{ article.pro_opis }}</p>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex class="xs2">
                    <p class="primary--text" :class="fontSize">
                      Cena: {{ article.pro_akcijskacena }} din.
                    </p>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex class="xs12 py-4 divider"></v-flex>
              <v-flex class="xs12">
                <ArticleDescriptionCard :description="article.pro_text"/>
              </v-flex>
              <v-flex class="xs12">
                <div class="mt-4">
                  <p class="subheading mb-0">Pitanja i odgovori</p>
                  <MessageForm />
                </div>
                <div
                  class="messages"
                  v-for="message in messages"
                  :key="message.kom_id"
                >
                  <MessageCard :message="message" />
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
import CategoriesDialog from "@/components/CategoriesDialog.vue";
import ArticleDescriptionCard from "@/components/ArticleDescriptionCard.vue";
import MessageForm from "@/components/MessageForm.vue";
import MessageCard from "@/components/MessageCard.vue";

import { mapState } from "vuex";
export default {
  props: ["id"],
  components: {
    CategoryList,
    CategoriesDialog,
    ArticleDescriptionCard,
    MessageForm,
    MessageCard
  },
  data() {
    return {
      window: {
        height: 0,
        width: 0
      },
      dialog: false
    };
  },
  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "display-2";
        default:
          return "display-3";
      }
    },
    ...mapState(["articleCategories", "article", "messages"])
  },
  created() {
    this.$store.dispatch("fetchArticleCategories");
    this.$store.dispatch("fetchArticle", this.id);
    this.$store.dispatch("fetchMessages", this.id);
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
