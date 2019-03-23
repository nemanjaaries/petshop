<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" block round color="primary">filteri</v-btn>
    </template>
    <v-card>
      <div class="close-bar">
        <v-icon
          large
          class="right font-weight-bold pa-2"
          d-block
          @click="dialog = false"
          >close</v-icon
        >
      </div>

      <p class="subheader">Filteri</p>

      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="(item, index) in categories"
          :key="index"
        >
          <template v-slot:header>
            <div>{{ item.title }}</div>
          </template>
          <v-card>
            <v-card-text
              class="px-5"
              v-for="(item, index) in item.items"
              :key="index"
              >{{ item.title }}</v-card-text
            >
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    categories: Array
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
.close-bar {
  height: 50px;
}
.subheader {
  font-size: 1.5em;
  padding: 0 24px;
}
</style>
