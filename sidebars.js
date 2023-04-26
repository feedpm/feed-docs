/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  docs: {
    Welcome: [
      'welcome/intro',
      'welcome/contribute',
      'welcome/style-guide',
      'welcome/mdx',
    ],
    CSS: [
      'css/coding-guidelines',
      'css/tools',
      'css/microinteraction',
      'css/form-ux',
      'css/ui-tips',
    ],
    JS: [
      'js/intro',
      'js/coding-guidelines',
      {
        type: 'category',
        label: 'Trainings',
        items: ['js/train1'],
      },
      {
        type: 'category',
        label: 'Reusable components',
        items: ['js/comp1'],
      },
      'js/tools',
    ],
    React: [
      'react/intro',
      'react/coding-guidelines',
      'react/boilerplate',
      {
        type: 'category',
        label: 'Trainings',
        items: [
          'react/training/jsx',
          'react/training/react-intro',
          'react/training/react-routing',
          'react/training/context',
          'react/training/hoc',
          'react/training/store-tutorial',
          'react/training/persist-store',
          'react/training/components-props-communication',
          'react/training/webpack',
          'react/training/parent-child-interaction-of-components',
          'react/train1',
          'react/training/installation',
          'react/training/lifting-state',
          'react/training/functional-components',
          'react/training/form-events',
          'react/training/react-component-styling',
          'react/training/flux-architecture',
          'react/training/configuring-parameters',
        ],
      },
      {
        type: 'category',
        label: 'Reusable components',
        items: ['react/comp1'],
      },
      'react/tools',
    ],
    Angular: [
      'angular/intro',
      'angular/coding-guidelines',
      {
        type: 'category',
        label: 'Trainings',
        items: [
          'angular/trainings/road-map',
          'angular/trainings/lazy-loading',
          'angular/trainings/common-mistakes',
        ],
      },
      {
        type: 'category',
        label: 'Reusable components',
        items: ['angular/comp1'],
      },
      'angular/tools',
    ],
    Node: [
      'node/intro',
      'node/coding-guidelines',
      {
        type: 'category',
        label: 'Trainings',
        items: ['node/train1'],
      },
      {
        type: 'category',
        label: 'Reusable components',
        items: ['node/comp1'],
      },
      'node/tools',
    ],
    'React Native': [
      'react-native/intro',
      'react-native/coding-guidelines',
      'react-native/mobile-ui-development-guidelines',
      {
        type: 'category',
        label: 'Trainings',
        items: ['react-native/train1'],
      },
      {
        type: 'category',
        label: 'Reusable components',
        items: ['react-native/comp1'],
      },
      'react-native/tools',
      'react-native/common-appstore-rejections',
    ],
  },
};
