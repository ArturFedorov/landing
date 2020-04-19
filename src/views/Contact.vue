<template>
  <div class="columns contact">
    <Background
      class="contact-background" />
    <div class="column">
      <Heading>
        Contact me
      </Heading>
      <h2 class="home-header-h2 is-uppercase is-red">
        Life is better in color
      </h2>
    </div>
    <div class="column contact-column is-right">
      <div class="contact-content">
        <div></div>
        <div>
          <div
            class="contact-content-item"
            v-for="contact in contacts"
            :key="contact.label">
            <span class="p-body is-blue">
              {{contact.label}}
            </span>
            <span class="p-body-italic is-blue">
              {{contact.value}}
            </span>
          </div>
        </div>
        <p>
          <SvgIcon
            class="contact-logo"
            width="40"
            height="40"
            name="ek" />
        </p>
      </div>
      <ImageCover class="contact-image"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Contact',
  data() {
    return {
      contacts: [
        { label: 'Phone:', value: '+7 921 965 66 12'},
        { label: 'Email:', value: 'kes@kab-online.ru'},
        { label: 'Address:', value: 'Frunzensakya subway, Pionesrkaya subway'}
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
  .contact {
    &-background {
      position: fixed;
      transform: rotate(-90deg);
      right: -540px;
      z-index: 2;

      @media ($mobile) {
        right: -640px;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      &-item {
        margin-bottom: 1em;
      }
    }

    &-column {
      &.is-right {
        background-color: $pink;
        position: relative;
      }
    }

    &-image {
      position: absolute;
      bottom: 0;
      z-index: 3;
      right: 0;
      width: 500px;
      height: 500px;

      @media ($tablet) {
        width: 400px;
        height: 400px;
      }

      @media ($mobile) {
        display: none;
      }
    }

    &-logo {
      margin-top: 1em;
      fill: $blue;
    }
  }
</style>
