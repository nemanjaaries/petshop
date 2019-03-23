import Vue from "vue";
import Vuex from "vuex";
import ArticleService from "@/services/ArticleService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    articlesTotal: 0,
    articleCategories: [],
    article: {}
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_ARTICLE_CATEGORIES(state, categories) {
      state.articleCategories = categories;
    },
    SET_ARTICLE(state, article) {
      state.article = article;
    },
    SET_ARTICLES_TOTAL(state, total) {
      state.articlesTotal = total;
    }
  },
  actions: {
    fetchArticles(context, { perPage, page }) {
      ArticleService.getArticles(perPage, page)
        .then(response => {
          context.commit("SET_ARTICLES", response.data);
          context.commit(
            "SET_ARTICLES_TOTAL",
            response.headers["x-total-count"]
          );
        })
        .catch(error => console.log(error.response));
    },
    fetchArticleCategories(context) {
      ArticleService.getArticleCategories()
        .then(response => {
          context.commit("SET_ARTICLE_CATEGORIES", response.data);
        })
        .catch(error => console.log(error.response));
    },
    fetchArticle(context, payload) {
      ArticleService.getArticle(payload)
        .then(response => {
          context.commit("SET_ARTICLE", response.data);
        })
        .catch(error => console.log(error.response));
    }
  }
});
