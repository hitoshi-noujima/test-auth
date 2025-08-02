import clsx from 'clsx';

import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'span'>, 'className'> & {
  variant?: 'primary' | 'info' | 'error';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
};

export const Badge: React.FC<Props> = ({
  variant = 'primary',
  size = 'medium',
  outline = false,
  ...props
}) => {
  return (
    <span
      {...props}
      className={clsx('badge', {
        'badge-primary': variant === 'primary',
        'badge-info': variant === 'info',
        'badge-error': variant === 'error',
        'badge-sm': size === 'small',
        'badge-lg': size === 'large',
        'badge-outline': outline,
      })}
    />
  );
};
