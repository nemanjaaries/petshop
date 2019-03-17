<template>
  <div class="contact">
    <v-container grid-list-xl>
      <BaseHeader head="Kontakt" subhead="Porucite proizvode danas!" />
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 class="text-xs-center pb-4">
          <ContactForm />
        </v-flex>
        <v-flex xs12 sm6 class="pl-5">
          <p class="subheading">
            <v-icon color="primary">location_on</v-icon>
            <span class="pl-2">Narodnih heroja 63 (lok.26), Novi Beograd</span>
          </p>
          <p class="subheading">
            <v-icon color="primary">phone</v-icon>
            <span class="pl-2">061 303 90 70</span>
          </p>
          <p class="subheading">
            <v-icon color="primary">email</v-icon>
            <span class="pl-2">tacinpetshop@gmail.com</span>
          </p>
          <p class="subheading">
            <v-icon color="primary">tv</v-icon>
            <span class="pl-2">www.tacin5shop.com</span>
          </p>
          <p class="subheading">
            <v-icon color="primary">access_time</v-icon>
            <span class="pl-2">vreme : 09:30-19h (Subota 09:30-15h)</span>
          </p>
          <p class="subheading">
            Pratite nas:
            <v-icon color="primary">mood</v-icon>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {
    ContactForm
  }
};
</script>
<style scoped>
.contact {
  padding: 40px 0;
  padding: 40px 0;
}
</style>
