import Vue from 'vue';

// Local Components
import SvgIcon from './SvgIcon/SvgIcon.vue';

const components: { [key: string]: {} } = {
  SvgIcon
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);
