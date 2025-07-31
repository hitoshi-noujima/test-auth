import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'label'>, 'className'>;

export const Label: React.FC<Props> = ({ ...props }) => {
  return <label {...props} className="label" />;
};
