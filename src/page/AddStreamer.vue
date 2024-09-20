<script setup lang="ts">
import AddStreamerComponent from '../components/AddStreamerComponent.vue';
import Form from '../components/Form.vue';
import ManageStreamers from '../components/ManageStreamers.vue';
import { ref, onMounted } from 'vue';

const fetchStreamers = async () => {
  try {
    const response = await fetch('http://localhost:3000//streamers/unfavourite', {
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
    <AddStreamerComponent v-if="streamers.length > 0" :streamers="streamers" />
    <Form />
    <ManageStreamers />
  </div>
</template>

<style scoped>
.page{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
</style>