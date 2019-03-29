<template>
  <div class="message-card">
    <div class="question-bar">
      <div class="profil text-xs-center">
        <p class="mb-0 primary--text">{{ message.userName }}</p>
        <v-img
          :src="`https://team.inria.fr/kerdata/files/2014/10/no-photo.jpg`"
          :lazy-src="`https://picsum.photos/10/6?`"
          width="48"
          aspect-ratio="1"
          class="grey lighten-2 profil-img"
        ></v-img>
      </div>
      <div class="question-body">
        <div class="date-time text-xs-right caption font-weight-bold">
          {{ message.questonTime }}
        </div>
        <p class="question-text">{{ message.userText }}</p>
      </div>
    </div>
    <div class="answer-bar">
      <div class="profil text-xs-center">
        <p class="mb-0 primary--text">{{ message.adminName }}</p>
        <v-img
          :src="
            `http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/dog-icon.png`
          "
          :lazy-src="`https://picsum.photos/10/6?`"
          width="48"
          aspect-ratio="1"
          class="grey lighten-2 profil-img"
        ></v-img>
      </div>
      <div class="question-body">
        <div class="date-time text-xs-right caption font-weight-bold">
          {{ message.answerTime }}
        </div>
        <p class="question-text">{{ message.adminText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: Object
  }
};
</script>

<style scoped>
.message-card {
  padding: 10px;
  border: 1px solid grey;
  margin-bottom: 20px;
}
.question-bar {
  display: flex;
}
.answer-bar {
  display: flex;
  margin-left: 29%;
  background-color: #ffe7d8;
  padding: 5px;
}
.profil {
  flex: 2;
}
.profil-img {
  display: inline-block;
}
.question-body {
  flex: 5;
}

@media screen and (max-width: 600px) {
  .answer-bar {
    margin-left: 0;
  }
}
</style>
