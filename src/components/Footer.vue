<template>
  <v-footer color="white" class="container pa-3">
    <v-layout row justify-center class="footer">
      <v-flex text-xs-center class="py-2">
        <div>
          Copyright &copy; {{ new Date().getFullYear() }}
          <span class="primary--text">Tacin 5SHOP</span>. All right reserved.
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  border-top: 1px solid gray;
}
</style>
