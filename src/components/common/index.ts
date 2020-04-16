import Vue from 'vue';

// Local Components
import SvgIcon from './SvgIcon/SvgIcon.vue';
import Background from '@/components/common/Background/Background.vue';
import ImageCover from '@/components/common/ImageCover/ImageCover.vue';
import Heading from '@/components/common/Heading/Heading.vue';
import Slider from '@/components/common/Slider/Slider.vue';

const components: { [key: string]: {} } = {
  Background,
  ImageCover,
  Heading,
  SvgIcon,
  Slider
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);
