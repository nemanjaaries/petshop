import axios from "axios";
import NProgress from "nprogress";

// const instance = axios.create({
//   baseURL: "http://localhost:3000",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" }
// });

// instance.interceptors.request.use(config => {
//   NProgress.start();
//   return config;
// });

// instance.interceptors.response.use(response => {
//   NProgress.done();
//   return response;
// });

const axiosInstance = axios.create({
  baseURL: "http://893m121.mars-e1.mars-hosting.com/API",
  timeout: 1000
});

axiosInstance.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

axiosInstance.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export default {
  // getArticles(perPage, page) {
  //   return instance.get("/articles?_limit=" + perPage + "&_page=" + page);
  // },
  getArticles(category_id = null) {
    if (category_id) {
      return axiosInstance.get("/allProizvodiOnKatID", {
        params:{
          id: category_id
        }
      });
    } else {
      return axiosInstance.get("/proizvodiAPI");
    }
  },
  getMessages(id) {
    return axiosInstance.get("/komentariAPI", {
      params:{
        proId: 10
      }
    });
  },
  getArticleCategories() {
    return axiosInstance.get("/allPodKat");
  },
  getArticle(id) {
    return axiosInstance.get("/product", {
      params:{
        id: id
      }
    });
  }
};

// export default {
//   // getArticles(perPage, page) {
//   //   return instance.get("/articles?_limit=" + perPage + "&_page=" + page);
//   // },
//   getArticles(category_id = null) {
//     if (category_id) {
//       return instance.get("/articles?category_id=" + category_id);
//     } else {
//       return instance.get("/articles");
//     }
//   },
//   getMessages() {
//     return instance.get("/messages");
//   },
//   getArticleCategories() {
//     return instance.get("/categories");
//   },
//   getArticle(id) {
//     return instance.get("/articles/" + id);
//   }
// };
