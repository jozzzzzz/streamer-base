<script setup lang="ts">
import AddStreamerComponent from '../components/AddStreamerComponent.vue';
import Form from '../components/Form.vue';
import ManageStreamers from '../components/ManageStreamers.vue';
</script>

<template>
  <div class="page">
    <AddStreamerComponent />
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