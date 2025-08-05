import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'time'>, 'className'>;

export const Time: React.FC<Props> = ({ ...props }) => {
  return <time {...props} className="text-secondary text-xs" />;
};
