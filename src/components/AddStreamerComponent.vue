<template>
  <div>
    <div class="container">
      <div>Streamers</div>
      <div class="row" v-for="streamer in streamers">
        <img :src="streamer.profilePicture" :alt="streamer.name" />
        <div class="streamer">
          <div>{{ streamer.name }}</div>
          <p>{{ streamer.pseudo }}</p>
        </div>
        <i class="fa-solid fa-check"></i>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
defineProps<{
  streamers: any[];
}>(); 
</script>

<style scoped>
.container {
  margin-top: 20px;
  background-color: #f8b5ff;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #000;
}
.row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 10px;
  border-top: 1px solid #000;
  padding: 10px;
}
.row i {
  display: flex;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.streamer {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.streamer div {
  font-weight: bold;
}
p{
  margin: 0;
  color: grey;
  font-size: 12px;
}
i {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  color: #000;
  cursor: pointer;
}
</style>