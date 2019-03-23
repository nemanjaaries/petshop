import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

export default {
  getArticles(perPage, page) {
    return instance.get("/articles?_limit=" + perPage + "&_page=" + page);
  },
  getArticleCategories() {
    return instance.get("/categories");
  },
  getArticle(id) {
    return instance.get("/articles/" + id);
  }
};
