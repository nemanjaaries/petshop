<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Vase ime i prezime*"
      solo-inverted
      flat
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email adresa*"
      solo-inverted
      flat
      required
    ></v-text-field>
    <v-textarea
      box
      solo-inverted
      flat
      auto-grow
      name="input-7-4"
      label="Vasa poruka"
    ></v-textarea>
    <v-btn
      class="px-4"
      large
      depressed
      round
      color="primary"
      @click="resetValidation"
      >Posalji poruku</v-btn
    >
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>
