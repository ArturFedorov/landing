<template>
  <div class="diplomas">
    <Background
      class="diplomas-background"/>
    <div class="diplomas-section">
      <Heading>
        Diplomas
      </Heading>
    </div>
    <div class="diplomas-section is-right">
        <div class="diplomas-section-content">
          <div class="diplomas-wrapper">
            <div
              class="diplomas-item"
              v-for="(diploma, index) in diplomas"
              :key="diploma.name"
              :class="[nextIndexClass(index), { 'is-actual' : (index === activeIndex)}]">
              <h2 class="diplomas-item-header is-blue">{{diploma.name}}</h2>
              <p class="p-body is-blue">{{diploma.text}}</p>
              <p class="p-body-italic is-blue">
                {{diploma.date}}
              </p>
            </div>
          </div>
          <div class="diplomas-links">
            <p class="p-body-italic is-blue">{{`${this.activeIndex + 1 }/${this.diplomas.length}`}}</p>
            <a
              class="diplomas-link"
              @click="animate">
              <SvgIcon
                width="50"
                height="50"
                name="arrow" />
            </a>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {AnimationService} from '@/shared/services/animation.service';
  export default Vue.extend({
    name: 'Diplomas',
    data() {
      return {
        activeIndex: 0,
        diplomas: [
          { name: 'Psychotherapist diploma', text: 'Theory and practice of gestalt therapy', date: '26.08.08 - 29.09.2013'},
          { name: 'Course1', text: 'Theory and practice of gestalt therapy', date: '26.03.08 - 29.03.2013'},
          { name: 'Course2', text: 'Theory and practice of gestalt therapy', date: '26.03.08 - 29.03.2013'},
          { name: 'Course3', text: 'Theory and practice of gestalt therapy', date: '26.03.08 - 29.03.2013'}
        ],
        timeline: AnimationService.timeLine()
      };
    },
    mounted(): void {
      this.timeline.set('.diplomas-item', {
        rotationZ: -90,
        opacity: 0
      });

      this.timeline.set('.is-actual', {
        rotationZ: 0,
        opacity: 1,
        y: 0
      });
    },
    methods: {
      animate() {
        this.timeline
          .to('.is-actual', {
            duration: 1,
             scale: 0.8,
            opacity: 0,
            ease: AnimationService.easing.power1.easeInOut
            //  backgroundColor: '#FDF9FF'
          }).to('.is-actual', {
          rotationZ: -90,
          scale: 1
        })
          .to('.is-next', {
            duration: 1,
            delay: -1.3,
            ease: AnimationService.easing.power1.easeOut,
            rotationZ: 0,
            opacity: 1,
            onComplete: () => this.activeIndex = this.activeIndex === this.diplomas.length -1 ? 0 : this.activeIndex + 1
          });

      },
      nextIndexClass(index: number): string {
        const lastIndex = this.activeIndex === this.diplomas.length-1 && index === 0;
        return ((index === this.activeIndex + 1) || lastIndex) ? 'is-next' : '';
      }
    }
  });
</script>

<style lang="scss" scoped>
  .diplomas {
    display: flex;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;

    &-background {
      position: fixed;
      transform: rotate(-90deg);
      right: -540px;
      z-index: 0;
    }

    &-section {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 4em;

      &-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        max-width: 60%;
        position: relative;
        z-index: 3;
      }

      &.is-right {
        background-color: $pink;
        // background: $pink url('../assets/images/rings.png') no-repeat;
        // background-position: right;
      }
    }

    &-wrapper {
      height: 40%;
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    &-item {
      width: 100%;
      position: absolute;
      top: 0;
      padding: 2em;
      right: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      transform-origin: top right;
      z-index: 1;
      background-color: $white;
      box-sizing: border-box;
      justify-content: space-between;
    }

    &-header {
      clip-path: circle(140.8% at 0 0);
      transform-origin: 50% 50%;
    }

    &-link {
      display: inline-block;
      border: 1px solid $blue;
      border-radius: 50%;
      height: 50px;
      cursor: pointer;

      &s {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2em;
      }

      svg {
        fill: $blue;
      }
    }
  }
</style>
