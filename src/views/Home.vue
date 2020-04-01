<template>
  <div class="home">
    <h1>Elena</h1>
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
