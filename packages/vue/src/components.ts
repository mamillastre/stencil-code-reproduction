/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, defineStencilSSRComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@placid/core';




export const MyComponent = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.MyComponent>('my-component', undefined, [
  'first',
  'middle',
  'last'
]) : defineStencilSSRComponent({
  tagName: 'my-component',
  hydrateModule: import('@placid/core/hydrate'),
  props: {
    'first': [String, "first"],
    'middle': [String, "middle"],
    'last': [String, "last"]
  }
});

