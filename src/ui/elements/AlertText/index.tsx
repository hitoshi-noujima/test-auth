import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'p'>, 'className'>;

export const AlertText: React.FC<Props> = ({ children, ...props }) => {
  return (
    <p {...props} className="text-error text-xs" aria-live="polite" role="alert">
      {children && <span>{children}</span>}
    </p>
  );
};
