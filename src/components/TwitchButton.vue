<template>
  <div class="container">
    <div :class="['button-live', { 'bg-offline': !online, 'bg-live': online }]">
      <img src="/public/twitch.svg" alt="twitch" />
      <div v-if="online">LIVE</div>
      <div v-else>OFFLINE</div>
    </div>
  </div>
</template>

<script lang="ts">
export default{
  name: 'TwitchButton',
  props: {
    twitch: {
      type: String,
      required: true
    },
    online: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
}
.button-live{
  display: flex;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 10px;
  color: white;
}
.button-live div{
  font-weight: bold;
  font-size: 15px;
  align-self: center;
}
.bg-offline{
  background-color: #2D4466;
}
.bg-live{
  background-color: #ff0000;
}
</style>