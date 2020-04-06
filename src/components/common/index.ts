import Vue from 'vue';

// Local Components
import SvgIcon from './SvgIcon/SvgIcon.vue';
import Background from '@/components/common/Background/Background.vue';
import Heading from '@/components/common/Heading/Heading.vue';

const components: { [key: string]: {} } = {
  Background,
  Heading,
  SvgIcon
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);
