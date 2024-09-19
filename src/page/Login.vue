<template>
  <div class="container">
    <div class="form-container">
      <h2>Connexion</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.name" />  
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <button type="submit">Se connecter</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const user = ref({
      name: '',
      password: ''
    });
    return { user };
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
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
  margin: 0 auto;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: #2D4466;
  color: white;
  cursor: pointer;
}
</style>