/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "@placid/core/components/my-component.js";
import { MyCounter as MyCounterElement, defineCustomElement as defineMyCounter } from "@placid/core/components/my-counter.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type MyComponentEvents = NonNullable<unknown>;

export const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyComponentElement, MyComponentEvents>({
        tagName: 'my-component',
        elementClass: MyComponentElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as MyComponentEvents,
        defineCustomElement: defineMyComponent
    })
    : /*@__PURE__*/ createSSRComponent<MyComponentElement, MyComponentEvents>({
        tagName: 'my-component',
        properties: {
            first: 'first',
            middle: 'middle',
            last: 'last'
        },
        hydrateModule: import('@placid/core/hydrate')
    });

type MyCounterEvents = NonNullable<unknown>;

export const MyCounter: StencilReactComponent<MyCounterElement, MyCounterEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyCounterElement, MyCounterEvents>({
        tagName: 'my-counter',
        elementClass: MyCounterElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as MyCounterEvents,
        defineCustomElement: defineMyCounter
    })
    : /*@__PURE__*/ createSSRComponent<MyCounterElement, MyCounterEvents>({
        tagName: 'my-counter',
        properties: { startCount: 'start-count' },
        hydrateModule: import('@placid/core/hydrate')
    });
