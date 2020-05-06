<template>
  <div class="navigation">
    <div
      class="navigation-item"
      :class="isEven(index) ? '' : 'is-centered'"
      v-for="(link, index) in links[locale]"
      :key="link.text">
      <p class="p-body-italic navigation-item-counter">
        {{ `0${ index +1 }`}}
      </p>
      <router-link
        :to="link.url"
        class="navigation-item-link is-blue">
        <h1
          class="navigation-item-text is-uppercase">
          {{ link.text }}
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
import {localeMixin} from '@/components/common/mixins/locale.mixin';
export default Vue.extend({
  mixins: [localeMixin],
  data() {
    return {
      links: {
        en: [
          { text: 'elena krasnenko', url: '/'},
          { text: 'about me', url: '/about'},
          { text: 'diplomas', url: '/diplomas'},
          { text: 'reviews', url: '/reviews' },
          { text: 'contact', url: '/contact'}
        ],
        ru: [
          { text: 'елена красненко', url: '/'},
          { text: 'обо мне', url: '/about'},
          { text: 'дипломы', url: '/diplomas'},
          { text: 'отзывы', url: '/reviews' },
          { text: 'контакты', url: '/contact'}
        ]
      }
    }
  },
  mounted(): void {
    AnimationService.gsap.timeline({defaults: { duration: 1.5}})
      .fromTo('.navigation-item-link', {
        duration: 1,
        opacity: 0,
        color: '#FF0092',
        x: -20,
        stagger: 0.1,
      }, {
        color: '#0455BF',
        stagger: 0.2,
        x: 0,
        opacity: 1
      })

  },
  methods: {
    isEven(index: number): boolean {
      return  index % 2 === 0;
    }
  }
});
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    background-color: $pink;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8em 8em 8em 14em;
    justify-content: space-between;
    overflow-y: auto;

    @media ($mobile) {
      padding: 8em 2em;
      justify-content: flex-start;
    }

    &-item {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      @media ($mobile) {
        margin-bottom: 4em;
      }

      &.is-centered {
        justify-content: center;

        @media ($mobile) {
          justify-content: flex-start;
        }
      }

      &-link {
        text-decoration: none;
      }

      &-text {
        line-height: 82%;
      }

      &-counter {
        margin-right: 2em;
        line-height: 100%;

        @media ($mobile) {
          margin-right: 1em;
        }
      }
    }
  }
</style>
