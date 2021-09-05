/// <reference types="react" />

declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const content: string;

  export const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;

  export default content;
}
