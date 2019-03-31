<template>
  <div class="about">
    <v-container grid-list-xl>
      <BaseHeader head="O nama" />
      <v-layout row wrap justify-center>
        <v-flex xs12>
          <div>
            <v-btn small color="primary" router to="/preview" class="mx-0"
              >preview</v-btn
            >
          </div>
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
          />

          <div class="editor-footer">
            <v-btn @click="save" small color="primary" class="mx-0">save</v-btn>
            <v-btn color="primary" small class="mx-0">publish</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: "",
      editorOption: {
        debug: "info",
        placeholder: "tipe some thing ...",
        readOnly: true,
        theme: "snow"
      },
      mounting: false
    };
  },
  computed: {
    ...mapState([]),
    ...mapGetters(["editorDelta", "editorContent"])
  },
  methods: {
    save() {}
  },
  watch: {
    content(val) {
      if (!this.mounting) {
        this.$store.dispatch(
          "setEditorDelta",
          this.$refs.myQuillEditor.quill.getContents()
        );
      }
      this.$store.dispatch("setEditorContent", val);
      this.mounting = false;
    }
  },
  mounted() {
    this.mounting = true;
    if (!this.content && this.editorContent) {
      this.content = this.editorContent;
    }
  }
};
</script>

<style>
.ql-editor {
  height: 60vh;
}
.editor-footer {
  display: flex;
  justify-content: space-between;
}
</style>
