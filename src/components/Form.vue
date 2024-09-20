<template>
  <div class="form-container">
    <h2>Enregistrer un nouveau streamer</h2>
    <form @submit.prevent="">
      <div class="form-group">
        <label for="name">Nom du streamer</label>
        <input type="text" v-model="nouveauStreamer.name" id="name" required>
      </div>

      <div class="form-group">
        <label for="compte">Compte sur lequel il joue</label>
        <input type="text" v-model="nouveauStreamer.compte" id="compte" required>
      </div>

      <div class="form-group">
        <label for="profilePicture">Pseudo Twitch</label>
        <input type="text" v-model="nouveauStreamer.profilePicture" id="profilePicture" required>
      </div>

      <div class="form-group">
        <label for="twitch">Pseudo Twitch</label>
        <input type="text" v-model="nouveauStreamer.twitch" id="twitch" required>
      </div>

      <div class="form-group">
        <label for="twitter">Pseudo twitter</label>
        <input type="text" v-model="nouveauStreamer.twitter" id="twitter" required>
      </div>

      <div class="form-group">
        <label for="youtube">Chaine youtube</label>
        <input type="text" v-model="nouveauStreamer.youtube" id="youtube">
      </div>

      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      nouveauStreamer: {
        name: '',
        compte: '',
        twitch: '',
        twitter: '',
        youtube: '',
        profilePicture: ''
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #E3A018;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #A388EE;
  color: black;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #C4A1FF;
}
</style>
