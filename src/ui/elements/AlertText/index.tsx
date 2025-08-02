import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'p'>, 'className'>;

export const AlertText: React.FC<Props> = ({ ...props }) => {
  return <p {...props} className="text-error text-xs" />;
};
