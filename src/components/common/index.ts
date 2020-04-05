import Vue from 'vue';

// Local Components
import SvgIcon from './SvgIcon/SvgIcon.vue';
import Background from '@/components/common/Background/Background.vue';

const components: { [key: string]: {} } = {
  Background,
  SvgIcon
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);
