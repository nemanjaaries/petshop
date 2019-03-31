<template>
  <div class="blog-preview">
    <v-container grid-list-xl>
      <BaseHeader head="Blog preview" />
      <v-layout row wrap justify-center>
        <v-flex xs12>
          <v-btn small color="primary" router to="/about" class="mx-0"
            >back</v-btn
          >
          <div class="blog-content" ref="contentContainer"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Quill from "quill";
import { setTimeout } from "timers";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([]),
    ...mapGetters(["editorDelta"])
  },
  mounted() {
    let blogArticle = document.createElement("blogArticle");
    let quill = new Quill(blogArticle, {});
    //quill.editor.disable();
    quill.setContents(this.editorDelta);
    setTimeout(() => {
      this.$refs.contentContainer.appendChild(blogArticle);
    }, 0);
  }
};
</script>

<style>
.blog-content {
  max-width: 1200px;
}
</style>
