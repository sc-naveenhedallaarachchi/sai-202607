// Below are built-in components that are available in the app, it's recommended to keep them as is
import { NextjsContentSdkComponent } from '@sitecore-content-sdk/nextjs';


import { BYOCWrapper, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in import section
import * as RichText from 'src/components/rich-text/RichText';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as Imageaa from 'src/components/image/Imageaa';
import * as Image from 'src/components/image/Image';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['RichText', { ...RichText }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['Imageaa', { ...Imageaa }],
  ['Image', { ...Image }],
]);

export default componentMap;
