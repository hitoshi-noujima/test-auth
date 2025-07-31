import clsx from 'clsx';
import { type ComponentPropsWithRef, createElement } from 'react';

type Props = Omit<ComponentPropsWithRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>, 'className'> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'small' | 'medium' | 'large';
};

export const Heading: React.FC<Props> = ({ level, size = 'medium', children, ...props }) => {
  return createElement(
    `h${level}`,
    {
      className: clsx('font-bold', {
        'text-base': size === 'small',
        'text-lg': size === 'medium',
        'text-xl': size === 'large',
      }),
      ...props,
    },
    children,
  );
};
