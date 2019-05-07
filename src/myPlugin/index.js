import scrollAd from './scroll/index.js';
const components = [
	scrollAd
]
const install = function(Vue, opts = {}) {
	components.forEach(component => {
	    Vue.component(component.name, component);
    });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
 
export default {
	install,
	scrollAd
}
