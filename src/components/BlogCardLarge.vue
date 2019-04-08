<template>
  <v-card router :to="link" class="blog-card elevation-2">
    <v-container class="pa-1">
      <v-layout row wrap>
        <v-flex xs12 md3>
          <div class="blog-left">
            <v-img
              src="https://i.pinimg.com/originals/f5/23/ac/f523acccd59ce28b8743158194b3487d.jpg"
              aspect-ratio="1"
              class="mb-2"
            ></v-img>
            <span class="grey--text">
              Objavio
              <span class="primary--text">tacin 5 shop</span> 21.06.2018.
            </span>
          </div>
        </v-flex>
        <v-flex xs12 md9>
          <div class="blog-right">
            <div class="blog-title primary--text headline font-weight-bold">
              {{ blog.title }}
            </div>
            <div class="blog-text mt-2">{{ blog.text }}</div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    blog: Object
  },
  data() {
    return {
      link: "/blog/"+ this.blog.id
    };
  }
};
</script>

<style scoped>
.blog-card {
  margin-bottom: 20px;
}
.blog-left {
  
}

.blog-right {
  padding: 0 20px;
}
.blog-text{
  
}
@media only screen and (max-width: 600px) {
  .blog-right {
    padding: 0;
    margin-top: 5px;
  }
}
</style>
