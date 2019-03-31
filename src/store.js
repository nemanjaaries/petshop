import Vue from "vue";
import Vuex from "vuex";
import ArticleService from "@/services/ArticleService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    articlesDisplay: [],
    // articlesTotal: 0,
    articleCategories: [],
    article: {},
    messages: [],
    /////////////////blog state///////////////////////////////
    editorDelta: undefined,
    editorContent: ""
  },
  getters: {
    // articlesPriceUp(state) {
    //   return state.articles.sort((a, b) => {
    //     return a.price > b.price ? 1 : -1;
    //   });
    // }

    ////////////blog getters///////////
    editorDelta(state) {
      return state.editorDelta;
    },
    editorContent(state) {
      return state.editorContent;
    }
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_ARTICLES_DISPLAY(state, payload) {
      state.articlesDisplay = state.articles.slice(payload.start, payload.end);
    },
    SORT_ARTICLES_PRICE_UP(state) {
      state.articles = state.articles.sort((a, b) => {
        return a.price < b.price ? 1 : -1;
      });
    },
    SORT_ARTICLES_PRICE_DOWN(state) {
      state.articles = state.articles.sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
    },
    SET_ARTICLE_CATEGORIES(state, categories) {
      state.articleCategories = categories;
    },
    SET_ARTICLE(state, article) {
      state.article = article;
    },
    SET_ARTICLES_TOTAL(state, total) {
      state.articlesTotal = total;
    },
    SET_MESSAGES(state, payload) {
      state.messages = payload;
    },
    ///////////////blog mutation//////////////////

    SET_EDITOR_DELTA(state, payload) {
      state.editorDelta = payload;
    },
    SET_EDITOR_CONTENT(state, payload) {
      state.editorContent = payload;
    }
  },
  actions: {
    // fetchArticles(context, { perPage, page }) {
    //   ArticleService.getArticles(perPage, page)
    //     .then(response => {
    //       context.commit("SET_ARTICLES", response.data);
    //       context.commit(
    //         "SET_ARTICLES_TOTAL",
    //         response.headers["x-total-count"]
    //       );
    //     })
    //     .catch(error => console.log(error.response));
    // },

    fetchArticles(context, payload) {
      ArticleService.getArticles()
        .then(response => {
          context.commit("SET_ARTICLES", response.data);
          context.commit("SET_ARTICLES_DISPLAY", payload);
        })
        .catch(error => console.log(error.response));
    },
    fetchMessages(context) {
      ArticleService.getMessages()
        .then(response => {
          context.commit("SET_MESSAGES", response.data);
        })
        .catch(error => console.log(error.response));
    },
    fetchArticlesByCategory(context, payload) {
      ArticleService.getArticles(payload)
        .then(response => {
          context.commit("SET_ARTICLES", response.data);
          context.commit("SET_ARTICLES_DISPLAY", payload);
        })
        .catch(error => console.log(error.response));
    },
    paginateArticles(context, payload) {
      context.commit("SET_ARTICLES_DISPLAY", payload);
    },
    sortArticlesByPrice(context, payload) {
      if (payload.param) {
        context.commit("SORT_ARTICLES_PRICE_UP");
        context.commit("SET_ARTICLES_DISPLAY", payload.range);
      } else {
        context.commit("SORT_ARTICLES_PRICE_DOWN");
        context.commit("SET_ARTICLES_DISPLAY", payload.range);
      }
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
    },
    ///////////blog actions///////////////

    setEditorDelta(context, payload) {
      context.commit("SET_EDITOR_DELTA", payload);
    },
    setEditorContent(context, payload) {
      context.commit("SET_EDITOR_CONTENT", payload);
    }
  }
});
