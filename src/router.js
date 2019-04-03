import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Articles from "./views/Articles.vue";
import Blog from "./views/Blog.vue";
import Blogs from "./views/Blogs.vue";
import Contact from "./views/Contact.vue";
import Article from "./views/Article.vue";
import BlogPreview from "./views/BlogPreview.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/article/:id",
      name: "article",
      component: Article,
      props: true
    },
    {
      path: "/preview",
      name: "preview",
      component: BlogPreview
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
