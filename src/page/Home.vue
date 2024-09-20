<script setup lang="ts">
import Table from '../components/Table.vue';
import TwitchEmbed from '../components/TwitchEmbed.vue';
import TwitchInfo from '../components/TwitchInfo.vue';
import { ref, onMounted } from 'vue';

const fetchStreamers = async () => {
  try {
    const response = await fetch('http://localhost:3000/streamers', {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error('Error fetching streamers:', response);
      return [];
    }
  } catch (error) {
    console.error('Error fetching streamers:', error);
    return [];
  }
};

const streamers = ref<any[]>([]);

onMounted(async () => {
  streamers.value = await fetchStreamers();
});
</script>

<template>
  <div class="page">
    <div class="twitch">
      <TwitchInfo v-if="streamers.length > 0" :streamer="streamers[0]"/>
      <TwitchEmbed v-if="streamers.length > 0" class="twitch-embed" :channel="streamers[0].twitchLink" />
    </div>
    <Table v-if="streamers.length > 0" :streamers="streamers" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.twitch {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 50px;
}
.twitch-embed {
  width: 60%;
  height: 500px;
  margin-right: 50px;
  display: flex;
  align-self: flex-end;
}
</style>