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
      
          type="current-password"
            class="mb-2"
            color="primary"
            v-model="password"
            :error-messages="passwordErrors"
            label="Lozinka"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
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
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import DialogHeader from "@/components/DialogHeader.vue";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    password: { required, minLength: minLength(8) }
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
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Must be more then 8 character");
      !this.$v.password.required && errors.push("Password is required");
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
