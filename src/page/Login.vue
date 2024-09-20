<template>
  <div v-if="login" class="container">
    <div class="form-container">
      <button @click="login = false" class="login-register">Créer un compte</button>
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
  <div v-else class="container">
    <div class="form-container">
      <button @click="login = true" class="login-register">Se connecter</button>
      <h2>Inscription</h2>
      <div class="form-group">
        <label for="newEmail">Email</label>
        <input type="email" id="newEmail" v-model="newUser.name" />  
      </div>
      <div class="form-group">
        <label for="newPassword">Mot de passe</label>
        <input type="password" id="newPassword" v-model="newUser.password" />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmer le mot de passe</label>
        <input type="password" id="confirmPassword" v-model="newUser.confirmPassword" />
      </div>
      <button type="submit">Créer un compte</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      login: true,
      user: {
        name: '',
        password: ''
      },
      newUser: {
        name: '',
        password: '',
        confirmPassword: ''
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #F8B5FF;
}
.login-register {
  align-self: flex-end;
}
.form-container:last-child {
  align-self: center;
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
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: #2D4466;
  color: white;
  cursor: pointer;
}
.button-group {
  display: flex;
  justify-content: space-between;
}
</style>