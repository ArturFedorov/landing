<template>
  <div class="columns">
    <Background
      class="diplomas-background"/>
    <div class="column">
      <Heading>
        Diplomas
      </Heading>
    </div>
    <div class="column is-right">
        <Slider
          class="diplomas-section-content"
          :slides="diplomas"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Diplomas',
  data() {
    return {
      activeIndex: 0,
      diplomas: [
        { id: 1, name: 'Psychotherapist diploma', text: 'Theory and practice of gestalt therapy', date: '01.09.2000 - 24.06.2005'},
        { id: 2, name: 'Moscow Gestalt Institute', text: 'Theory and practice of gestalt therapy', date: '20.08.2008 - 29.09.2013'},
        { id: 3, name: 'Gestalt certificate', text: 'Window in Gestalt', date: '15.10.11 - 16.10.2011'},
        { id: 4, name: 'Gestalt certificate1', text: 'Window in Gestalt', date: '11.10.14 - 12.10.2014'}
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
  .diplomas {
    &-background {
      position: fixed;
      transform: rotate(-90deg);
      right: -540px;
      z-index: 0;
    }

    &-section {
      &-content {
        max-width: 60%;

        @media ($tablet) {
          width: 100%;
          max-width: 100%;
        }
      }
    }

    &-header {
      clip-path: circle(140.8% at 0 0);
      transform-origin: 50% 50%;
    }
  }
</style>
