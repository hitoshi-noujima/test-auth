import { Label } from '@/ui/elements/Label';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof Label> & {
  required?: boolean;
};

export const LabelWithBadge: React.FC<Props> = ({ children, required = false, ...props }) => {
  return (
    <Label {...props}>
      <span className="inline-flex items-center gap-2">
        <span>{children}</span>
        {required ? (
          <span className="badge badge-outline badge-error badge-sm">必須</span>
        ) : (
          <span className="badge badge-outline badge-info badge-sm">任意</span>
        )}
      </span>
    </Label>
  );
};
