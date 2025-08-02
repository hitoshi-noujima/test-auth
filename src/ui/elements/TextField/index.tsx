import type { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'input'>, 'className'>;

export const TextField: React.FC<Props> = ({ type = 'text', ...props }) => {
  return <input {...props} className="input aria-[invalid=true]:border-error" type={type} />;
};
