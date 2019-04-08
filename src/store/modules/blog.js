import BlogService from "@/services/BlogService.js";

export const state = {
  blogs: [],
  blog: {},
  blogsDisplay: [],
  blogCategories: []
};

export const getters = {};

export const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
  SET_BLOGS_DISPLAY(state, payload) {
    state.blogsDisplay = state.blogs.slice(payload.start, payload.end);
    console.log(state.blogsDisplay);
  },
  SET_BLOG(state, blog) {
    state.blog = blog;
  },
  SET_BLOG_CATEGORIES(state, blogs) {
    state.blogCategories = blogs;
  }
};

export const actions = {
  fetchBlogs(context, payload) {
    BlogService.getBlogs()
      .then(response => {
        console.log(response.data);
        context.commit("SET_BLOGS", response.data);
        context.commit("SET_BLOGS_DISPLAY", payload);
      })
      .catch(error => console.log(error.response));
  },
  fetchBlog(context, payload) {
    BlogService.getBlog(payload)
      .then(response => {
        context.commit("SET_BLOG", response.data);  
      })
      .catch(error => console.log(error.response));
  },
  fetchBlogCategories(context) {
    BlogService.getBlogCategories()
      .then(response => {
        context.commit("SET_BLOG_CATEGORIES", response.data);
      })
      .catch(error => console.log(error.response));
  },
  paginateBlogs(context, payload) {
    context.commit("SET_BLOGS_DISPLAY", payload);
  },
  fetchBlogsByCategory(context, payload) {
    BlogService.getBlogs(payload.cat_id)
      .then(response => {
        console.log(payload.range);
        context.commit("SET_BLOGS", response.data);

        context.commit("SET_BLOGS_DISPLAY", payload.range);
      })
      .catch(error => console.log(error.response));
  }
};
