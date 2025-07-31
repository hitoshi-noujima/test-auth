import clsx from 'clsx';

import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'button'>, 'className'> & {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
};

export const Button: React.FC<Props> = ({
  variant = 'primary',
  size = 'medium',
  outline = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx('btn', {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-accent': variant === 'accent',
        'btn-sm': size === 'small',
        'btn-lg': size === 'large',
        'btn-outline': outline,
      })}
    />
  );
};
