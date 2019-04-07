import Vue from "vue";
import Vuex from "vuex";

import * as article from "@/store/modules/article.js";
import * as blog from "@/store/modules/blog.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article,
    blog
  },
  state: {
    messages: [],

    editorDelta: undefined,
    editorContent: ""
  },
  getters: {
    // articlesPriceUp(state) {
    //   return state.articles.sort((a, b) => {
    //     return a.price > b.price ? 1 : -1;
    //   });
    // }

    editorDelta(state) {
      return state.editorDelta;
    },
    editorContent(state) {
      return state.editorContent;
    }
  },
  mutations: {
    SET_MESSAGES(state, payload) {
      state.messages = payload;
    },

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

    setEditorDelta(context, payload) {
      context.commit("SET_EDITOR_DELTA", payload);
    },
    setEditorContent(context, payload) {
      context.commit("SET_EDITOR_CONTENT", payload);
    }
  }
});
