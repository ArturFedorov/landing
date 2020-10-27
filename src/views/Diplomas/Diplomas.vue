<i18n src="./Diploma.yml" />
<template>
  <div class="columns diplomas">
    <DiplomasPreview
      :url="activeImage"
      @hide-preview="activeImage = ''"/>
    <Background
      class="diplomas-background"/>
    <div class="column">
      <Heading>
        {{ $t('title') }}
      </Heading>
    </div>
    <div class="column is-right">
        <Slider
          class="diplomas-section-content"
          :class="{'is-thin': isRussianLocale}"
          :slides="diplomas[locale]"
          @select-slide ="onSlideSelected"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {localeMixin} from '@/components/common/mixins/locale.mixin';
import DiplomasPreview from '@/components/diplomas/DiplomasPreview.vue';

export default Vue.extend({
  name: 'Diplomas',
  components: {
    DiplomasPreview
  },
  mixins: [localeMixin],
  data() {
    return {
      activeIndex: 0,
      activeImage: '',
      diplomas: {
        en: [
          { id: 1, name: 'Psychotherapist diploma', text: 'Theory and practice of gestalt therapy', date: '01.09.2000 - 24.06.2005', url: 'dip1.jpg'},
          { id: 2, name: 'Moscow Gestalt Institute', text: 'Theory and practice of gestalt therapy', date: '20.08.2008 - 29.09.2013', url: 'cert1.jpg'},
          { id: 3, name: 'Gestalt certificate', text: 'Window in Gestalt', date: '15.10.11 - 16.10.2011', url: 'cert2.jpg'},
          { id: 4, name: 'Gestalt certificate', text: 'Window in Gestalt', date: '11.10.14 - 12.10.2014', url: 'cert3.jpg'}
        ],
        ru: [
          { id: 1, name: 'Диплом психолога', text: 'Теория и практика гештальт-терапии', date: '01.09.2000 - 24.06.2005', url: 'dip1.jpg'},
          { id: 2, name: 'Московский гештальт-институт', text: 'Теория и практика гештальт-терапии', date: '20.08.2008 - 29.09.2013', url: 'cert1.jpg'},
          { id: 3, name: 'Сертификат участия', text: 'Окно в Гештальт 2011', date: '15.10.11 - 16.10.2011', url: 'cert2.jpg'},
          { id: 4, name: 'Сертификат участия', text: 'Окно в Гештальт 2014', date: '11.10.14 - 12.10.2014', url: 'cert3.jpg'}
        ]
      }
    };
  },
  methods: {
    onSlideSelected(slide: { url: string}) {
      this.activeImage = slide.url;
    }
  }
});
</script>

<style lang="scss" scoped>
  .diplomas {
    height: 100vh;

    &-background {
      position: fixed;
      transform: rotate(-90deg);
      right: -540px;
      z-index: 0;

      @media ($mobile) {
        right: -640px;
      }
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
