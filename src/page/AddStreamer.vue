<script setup lang="ts">
import Form from '../components/Form.vue';
import ManageStreamers from '../components/ManageStreamers.vue';
</script>

<template>
  <div class="page">
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