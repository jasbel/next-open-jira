import * as React from '@types/react';
import React, { PropsWithChildren } from 'react';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

type PropsWithChildren<P> = P & { children?: ReactNode };

export type ReactFCC<T> = React.FC<PropsWithChildren<T>>;