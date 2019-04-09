import Vue from 'vue';
import LazyLoad from 'vanilla-lazyload';
import './ImgLazy.css';

export default {
  name: 'ImgLazy',
  functional: true,
  props: {
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      required: false,
      default: undefined,
    },
    sizes: {
      type: String,
      required: false,
      default: undefined,
    },
    alt: {
      type: String,
      required: false,
      default: undefined,
    },
    width: {
      type: String,
      required: false,
      default: undefined,
    },
    height: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  render(createElement, { props, data }) {
    // single global instance
    if (!document.imgLazyLoadInstance) {
      // See https://github.com/verlok/lazyload#options for what these options are.
      document.imgLazyLoadInstance = new LazyLoad({
        element_selector: '.img-lazy', // css selector for our class
        threshold: 300, // load images when within 300px of the viewport
      });
    }

    // schedule update on next tick after our new img element has been rendered (on this tick)
    Vue.nextTick().then(() => {
      document.imgLazyLoadInstance.update();
    });

    return createElement('img', {
      ...data,

      // always override with a key based on props so this DOM element is completely replaced
      // and re-lazy'd when altered in any way. Otherwise the lazyload library ignores the element
      // even when changes occur because it has already marked it as processed.
      key: Object.values(props).join(','),

      attrs: {
        ...data.attrs,
        alt: props.alt,
        'data-src': props.src,
        'data-srcset': props.srcset,
        'data-sizes': props.sizes,
        width: props.width,
        height: props.height,
      },
      class: {
        ...data.class,
        'img-lazy': true,
      },
    });
  },
};
