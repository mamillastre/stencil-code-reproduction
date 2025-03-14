import { type Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';


export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      dir: 'components',
    },
    angularOutputTarget({
      componentCorePackage: '@placid/core',
      outputType: 'standalone',
      directivesProxyFile: '../angular-workspace/projects/angular/src/lib/standalone/components.ts',
      directivesArrayFile: '../angular-workspace/projects/angular/src/lib/standalone/index.ts',
    }),
    reactOutputTarget({
      outDir: '../react/src',
      hydrateModule: '@placid/core/hydrate',
    }),
    vueOutputTarget({
      includeImportCustomElements: true,
      componentCorePackage: '@placid/core',
      hydrateModule: '@placid/core/hydrate',
      proxiesFile: '../vue/src/components.ts',
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: './public' },
      ],
    },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
