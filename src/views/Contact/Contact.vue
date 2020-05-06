<i18n src="./Contact.yml" />
<template>
  <div class="columns contact">
    <Background
      class="contact-background" />
    <div class="column">
      <Heading>
        {{ $t('title') }}
      </Heading>
      <h2 class="is-uppercase is-red">
        {{ $t('subtitle') }}
      </h2>
    </div>
    <div class="column contact-column is-right">
      <div class="contact-content">
        <div></div>
        <div>
          <div
            class="contact-content-item"
            v-for="contact in contacts[locale]"
            :key="contact.label">
            <span
              class="p-body is-blue"
              :class="{'is-thin':isRussianLocale}">
              {{contact.label}}
            </span>
            <span
              class="p-body-italic is-blue"
              :class="{'is-thin': isRussianLocale}">
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
import {localeMixin} from '@/components/common/mixins/locale.mixin';
export default Vue.extend({
  name: 'Contact',
  mixins: [localeMixin],
  data() {
    return {
      contacts: {
        en: [
          { label: 'Phone:', value: '+7 921 965 66 12'},
          { label: 'Email:', value: 'kes@kab-online.ru'},
          { label: 'Address:', value: 'Frunzensakya subway, Pionesrkaya subway'}
        ],
        ru: [
          { label: 'Телефон:', value: '+7 921 965 66 12'},
          { label: 'Почта:', value: 'kes@kab-online.ru'},
          { label: 'Адрес:', value: 'метро Фрунзенская, метро Пионерская'}
        ]
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .contact {
    overflow-x: hidden;

    &-background {
      position: fixed;
      transform: rotate(-90deg);
      right: -540px;
      z-index: 2;

      @media ($mobile) {
        right: -690px;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      position: relative;
      z-index: 2;

      @media ($mobile) {
        justify-content: flex-start;
        padding-top: 4em;
      }

      &-item {
        margin-bottom: 1em;
      }
    }

    &-column {
      &.is-right {
        position: relative;
        background-color: $white;
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

      @media ($mobile) {
        margin-top: 3em;
      }
    }
  }
</style>
