import ArticleService from "@/services/ArticleService.js";

export const state = {
  articles: [],
  articlesDisplay: [],
  // articlesTotal: 0,
  articleCategories: [],
  article: {},
  totalPages: null
};

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles;
  },
  SET_TOTAL_PAGES(state, value) {
    state.totalPages = value;
  },
  SET_ARTICLES_DISPLAY(state, payload) {
    state.articlesDisplay = state.articles.slice(payload.start, payload.end);
  },
  SORT_ARTICLES_PRICE_UP(state) {
    state.articles = state.articles.sort((a, b) => {
      return a.pro_akcijskacena < b.pro_akcijskacena ? 1 : -1;
    });
  },
  SORT_ARTICLES_PRICE_DOWN(state) {
    state.articles = state.articles.sort((a, b) => {
      return a.pro_akcijskacena > b.pro_akcijskacena ? 1 : -1;
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
  }
};

export const actions = {
  fetchArticles(context, { perPage, page }) {
    ArticleService.getArticles(perPage, page)
      .then(response => {
        context.commit("SET_ARTICLES", response.data);
        context.commit("SET_TOTAL_PAGES", 4);
        //context.commit("SET_ARTICLES", response.data.sviProizvodi);
        //context.commit("SET_ARTICLES_DISPLAY", payload);
      })
      .catch(error => console.log(error.response));
  },
  fetchMessages(context, payload) {
    ArticleService.getMessages(payload)
      .then(response => {
        console.log(response.data.komentari);
        context.commit("SET_MESSAGES", response.data.komentari);
      })
      .catch(error => console.log(error.response));
  },
  fetchArticlesByCategory(context, payload) {
    ArticleService.getArticles(payload.cat_id)
      .then(response => {
        context.commit("SET_ARTICLES", response.data.sviProizvodi);
        context.commit("SET_ARTICLES_DISPLAY", payload.range);
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
        context.commit("SET_ARTICLE_CATEGORIES", response.data.proizvodi);
      })
      .catch(error => console.log(error.response));
  },
  // getArticle(context, payload){
  //   context.commit("SET_ARTICLE", payload);
  // },
  fetchArticle(context, payload) {
    ArticleService.getArticle(payload)
      .then(response => {
        context.commit("SET_ARTICLE", response.data.product);
      })
      .catch(error => console.log(error.response));
  }
};
