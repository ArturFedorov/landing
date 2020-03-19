<template>
  <div class="home">
    <h1 class="h0">h1 Artur <br />Fedorov</h1>
    <Date />
    <h1>h1 Artur Fedorov new</h1>
    <h2>h2 Artur Fedorov</h2>
    <h3>h3 Artur Fedorov</h3>
    <p>18px Testing base text</p>
    <p class="p-body">16px Testing base text</p>
    <p class="caption">12px Testing base text</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '@/api/db';
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      years: []
    };
  },
  firestore: {
    years: db.collection('years')
  }
});
</script>
