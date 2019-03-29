<template>
  <div class="article-description">
    <div class="title">Opis</div>
    <div class="text">
      <p class="mb-0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
        sit? Unde laborum eligendi quas id architecto distinctio accusantium,
        saepe modi consectetur magni at neque. Inventore, qui exercitationem
        maxime ipsam esse odio recusandae ipsum possimus! Laudantium fugiat
        expedita dolorem fugit nulla distinctio, ipsa, aspernatur est eveniet
        praesentium debitis, eligendi earum? Soluta expedita quisquam quaerat
        quo dolore ullam, quod a, veritatis distinctio vero sapiente ducimus
        doloremque delectus odit vitae natus hic fugiat molestias perspiciatis,
        voluptates totam? Consequatur pariatur molestiae perferendis nemo,
        aliquid odit voluptates voluptate dolorum consectetur dicta harum ad
        repudiandae quo molestias ab repellat ex eaque accusamus laborum! Rerum,
        aliquam maxime.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
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
