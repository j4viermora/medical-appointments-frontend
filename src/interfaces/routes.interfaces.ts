import { LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

export interface IRoute {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export default IRoute;
