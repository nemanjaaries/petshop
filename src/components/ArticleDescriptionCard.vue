<template>
  <div class="article-description">
    <div class="title">Opis</div>
    <div class="text">
      <p class="mb-0">
        {{description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    description: String
  }
};
</script>

<style scoped>
.article-description {
  position: relative;
}
.title {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background-color: white;
  padding: 15px 25px;
  top: 8px;
  border-left: 1px solid grey;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: -8px;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
}
.text {
  border-top: 1px solid gray;

  padding: 10px;
  padding-right: 40%;
  padding-top: 20px;
}

@media screen and (max-width: 800px) {
  .text {
    padding-right: 0;
  }
}
</style>
