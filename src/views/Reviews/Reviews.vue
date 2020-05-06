<i18n src="./Reviews.yml" />
<template>
  <div class="columns reviews">
    <div class="column">
      <Heading class="is-red">
        {{ $t('title') }}
      </Heading>
    </div>
    <div class="column is-right">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Reviews'
});
</script>

<style lang="scss" scoped>
  .reviews {

  }
</style>
