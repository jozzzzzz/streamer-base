<script>
export default {
  data() {
    return {
      nouveauStreamer: {
        name: '',
        compte: '',
        twitch: ''
      }
    }
  },
  methods: {
    ajouterStreamer() {
      const streamer = { 
        ...this.nouveauStreamer, 
        rank: this.streamers.length + 1 
      }
      this.streamers.push(streamer)
      this.nouveauStreamer = { name: '', compte: '', twitch: '' } // Réinitialiser le formulaire
    }
  }
}
</script>

<template>
  <div class="form-container">
    <h2>Enregistrer un nouveau streamer</h2>
    <form @submit.prevent="ajouterStreamer">
      <div class="form-group">
        <label for="name">Nom du streamer</label>
        <input type="text" v-model="nouveauStreamer.name" id="name" required>
      </div>

      <div class="form-group">
        <label for="compte">Compte sur lequel il joue</label>
        <input type="text" v-model="nouveauStreamer.compte" id="compte" required>
      </div>

      <div class="form-group">
        <label for="twitch">Chaine Twitch</label>
        <input type="text" v-model="nouveauStreamer.twitch" id="twitch" required>
      </div>

      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

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
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
