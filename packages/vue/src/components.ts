/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, defineStencilSSRComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@placid/core';

import { defineCustomElement as defineMyComponent } from '@placid/core/components/my-component.js';
import { defineCustomElement as defineMyCounter } from '@placid/core/components/my-counter.js';


export const MyComponent = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.MyComponent>('my-component', defineMyComponent, [
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


export const MyCounter = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.MyCounter>('my-counter', defineMyCounter, [
  'startCount'
]) : defineStencilSSRComponent({
  tagName: 'my-counter',
  hydrateModule: import('@placid/core/hydrate'),
  props: {
    'startCount': [Number, "start-count"]
  }
});

