import clsx from 'clsx';

import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'span'>, 'className' | 'children'> & {
  size?: 'small' | 'medium' | 'large';
};

export const Loading: React.FC<Props> = ({ size = 'medium', ...props }) => {
  return (
    <span
      {...props}
      className={clsx('loading loading-spinner opacity-50', {
        'loading-sm': size === 'small',
        'loading-lg': size === 'large',
      })}
    />
  );
};
