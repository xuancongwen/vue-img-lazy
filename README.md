# @volleytravel/vue-img-lazy

A [Vue.JS](https://vuejs.org) component for lazy loading images as they come into view on the page. Uses
[vanilla-lazyload](https://github.com/verlok/lazyload) under the hood.

## Usage

Install it by the usual means:
```
yarn add @volleytravel/vue-img-lazy
# or
npm install @volleytravel/vue-img-lazy
```

You use `<img-lazy>` anywhere you'd ordinarily use `<img>`, with the same attributes
you'd ordinarily use, and let the component take care of the rest!

For example, using it in a Vue SFC.

```vue
<script>
import ImgLazy from '@volleytravel/vue-img-lazy';
import '@volleytravel/vue-img-lazy/dist/imgLazy.css'

export default {
  name: 'ExampleComponent',
  components: {
    ImgLazy,
  },
};
</script>

<template>
  <div>
    <!-- Simplest usage -->
    <img-lazy src="/images/kittens.jpg" />
    
    <!-- Any attributes you'd ordinarily use on <img> will work too -->
    <img-lazy
      src="/images/kittens.jpg"
      srcset="/images/kittens.jpg, /images/kittens@2x.jpg 2x"
      alt="So. Many. Kittens!"
    />
    
    <img-lazy
      src="/images/kittens.jpg"
      crossorigin="anonymous"
    />
  </div>
</template>
```

If you'd prefer to globally register it for use anywhere in your app, just add this in your
entry point (`main.js`):

```js
import Vue from 'vue';
import ImgLazy from '@volleytravel/vue-img-lazy';
import '@volleytravel/vue-img-lazy/dist/imgLazy.css'

Vue.component('img-lazy', ImgLazy);
```

In either case, remember to import the CSS! Without it, things will still work, but you may notice images
taking up no space, then expanding to fit when they load (yuck!). The CSS simply applies `visibility: hidden`
while the image has not yet triggered the lazy load.

## Bugs / Feedback / Contributing
Open a Github issue or send us a pull request.

If you do submit a pull request, you agree to license your code under the same terms
that are found in this repo's LICENSE file (it's super-common MIT license).
