<template>
  <v-dialog v-model="loginDialog" persistent max-width="400px">
    <template v-slot:activator="{ on }">
      <v-btn class="px-4" dark v-on="on" small depressed round color="primary"
        >uloguj se</v-btn
      >
    </template>

    <v-card class="card">
      <v-card-text class="pt-1">
        <DialogHeader head="Uloguj se" />
        <form class="form">
          <v-text-field
            color="primary"
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Korisnicko ime"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            class="mb-2"
            color="primary"
            v-model="password"
            label="Lozinka"
            required
          ></v-text-field>
          <!-- <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>-->
          <!-- <v-btn
            class="px-4 mt-3"
            @click="clear"
            dark
            depressed
            round
            color="primary"
            >uloguj se</v-btn
          >-->
          <v-btn class="px-4 mt-3" @click="clear" dark flat color="primary"
            >uloguj se</v-btn
          >
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import DialogHeader from "@/components/DialogHeader.vue";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email }
  },
  components: {
    DialogHeader
  },
  data() {
    return {
      loginDialog: false,
      name: "",
      password: "",
      email: ""
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.loginDialog = false;
      this.password = "";
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  padding: 0 20px;
}
.form {
  text-align: center;
}
</style>
