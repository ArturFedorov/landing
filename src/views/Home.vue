<template>
  <div class="home">
    <SvgIcon name="logo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {db} from '@/api/db';
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      years: []
    };
  },
  firestore: {
    years: db.collection('years'),
  },
});
</script>
