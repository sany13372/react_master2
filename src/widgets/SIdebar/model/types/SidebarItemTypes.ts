import { FunctionComponent, SVGAttributes } from 'react';

export interface SidebarItemTypes {
  path: string,
  text: string,
  Icon: FunctionComponent<SVGAttributes<SVGElement>>,
  authOnly?: boolean;
}
