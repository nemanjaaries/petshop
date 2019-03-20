<template>
  <v-dialog v-model="registerDialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        class="px-4"
        dark
        v-on="on"
        outline
        small
        depressed
        round
        color="primary"
        >prijavi se</v-btn
      >
    </template>

    <v-card class="card">
      <v-card-text>
        <DialogHeader head="Registruj se" />
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
            color="primary"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            color="primary"
            type="current-password"
            v-model="password"
            :error-messages="passwordErrors"
            label="Lozinka"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            color="primary"
            type="current-password"
            v-model="passwordRepeat"
            :error-messages="passwordRepeatErrors"
            label="Ponovi lozinku"
            required
            @input="$v.passwordRepeat.$touch()"
            @blur="$v.passwordRepeat.$touch()"
          ></v-text-field>
          <v-btn @click="submit" flat color="primary">submit</v-btn>
          <v-btn @click="clear" flat color="primary">clear</v-btn>
          <v-btn @click="registerDialog = false" flat color="primary"
            >exit</v-btn
          >
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength, sameAs, email } from "vuelidate/lib/validators";
import DialogHeader from "@/components/DialogHeader.vue";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    passwordRepeat: { required, sameAsPassword: sameAs('password')}
  },
  components: {
    DialogHeader
  },
  data() {
    return {
      registerDialog: false,
      name: "",
      email: "",
      password: "",
      passwordRepeat: ""
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
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be more then 8 character!");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    passwordRepeatErrors() {
      const errors = [];
      if (!this.$v.passwordRepeat.$dirty) return errors;
      !this.$v.passwordRepeat.sameAsPassword &&
        errors.push("Password repeat must match password");
      !this.$v.passwordRepeat.required &&
        errors.push("Password repeat is required.");
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
      this.password = "";
      this.passwordRepeat = "";
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
