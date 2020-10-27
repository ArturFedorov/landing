<template>
  <div class="slider">
    <div class="slider-wrapper">
      <div
        class="slider-item"
        v-for="(slider, index) in slides"
        :key="slider.id"
        :class="[nextIndexClass(index), { 'is-actual' : (index === activeIndex)}]"
        @click="selectSlide(slider)">
        <h2
          class="h2 slider-item-header is-blue"
          v-if="slider.name">
          {{slider.name}}
        </h2>
        <p class="p-body-big is-blue">{{slider.text}}</p>
        <p class="p-body-italic is-blue">
          {{slider.date}}
        </p>
      </div>
    </div>
    <div class="slider-links">
      <p class="p-body-italic is-blue">{{`${this.activeIndex + 1 }/${this.slides.length}`}}</p>
      <a
        class="slider-link"
        @click="animate">
        <SvgIcon
          width="50"
          height="50"
          name="arrow" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'Slider',
  data() {
    return {
      activeIndex: 0,
      timeline: AnimationService.timeLine()
    }
  },
  props: {
    slides: {
      type: Array as () => { name: string; text: string; date: string; }[],
      required: true
    },
    rotationAngles: {
      type: Object as () => { x: number , y: number, z: number},
      default: () => ({ x: -10, y: 10, z: -90})
    }
  },
  mounted(): void {
    this.timeline.set('.slider-item', {
      rotationZ: this.rotationAngles.z,
      opacity: 0
    });

    this.timeline.set('.is-actual', {
      rotationZ: 0,
      opacity: 1,
      y: 0
    });

    this.timeline.set('.is-next', {
      scale: 2
    });

    this.timeline.to('.slider-item', {
      rotationX: this.rotationAngles.x,
      rotationY: this.rotationAngles.y,
      duration: 2,
      delay: 0.5
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
          scale: 1,
          onComplete: () => this.activeIndex = this.activeIndex === this.slides.length -1 ? 0 : this.activeIndex + 1
        });

    },
    nextIndexClass(index: number): string {
      const lastIndex = this.activeIndex === this.slides.length-1 && index === 0;
      return ((index === this.activeIndex + 1) || lastIndex) ? 'is-next' : '';
    },
    selectSlide(slider: { name: string; text: string; date: string; }) {
      this.$emit('select-slide', slider);
    }
  }
});
</script>

<style lang="scss" scoped>
  .slider {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 3;

    &.is-thin {
      .h2,
      .p-body-big,
      .p-body-italic {
        font-weight: $font-thin;
      }
    }

    &-wrapper {
      height: 100%;
      position: relative;
      overflow: hidden;
      width: 100%;
      perspective: 1000px;

      @media ($tablet) {
        min-height: 50vh;
      }
    }

    &-item {
      width: 100%;
      position: absolute;
      top: 0;
      padding: 4em;
      right: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      transform-origin: top right;
      z-index: 1;
      background-color: $pink;
      box-sizing: border-box;
      justify-content: space-between;
      box-shadow: 0 5px 10px $pink;
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
