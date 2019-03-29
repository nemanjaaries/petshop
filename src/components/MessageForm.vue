<template>
  <v-dialog v-model="messageDialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        class="ma-0 px-0 caption"
        dark
        v-on="on"
        small
        depressed
        flat
        color="primary"
        >dodajte komentar ili pitanje</v-btn
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
            :counter="15"
            label="Korisnicko ime"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-textarea
            label="Komentar"
            v-model="text"
            :error-messages="textErrors"
            aria-required
            hint="Komentar"
            @input="$v.text.$touch()"
            @blur="$v.text.$touch()"
          ></v-textarea>
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
          <v-btn class="px-4 mt-3" @click="submit" dark flat color="primary"
            >posalji komentar</v-btn
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
    name: { required, maxLength: maxLength(15) },
    text: { required }
  },
  components: {
    DialogHeader
  },
  data() {
    return {
      messageDialog: false,
      name: "",
      text: ""
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 15 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    textErrors() {
      const errors = [];
      if (!this.$v.text.$dirty) return errors;
      !this.$v.text.required && errors.push("Message is required");
      return errors;
    },
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.name.$error && !this.$v.text.$error) {
        console.log("Valid form");
        this.messageDialog = false;
      } else {
        console.log("Not valid form");
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.text = "";
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
