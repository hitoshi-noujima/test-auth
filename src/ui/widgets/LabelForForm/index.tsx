import { Badge } from '@/ui/elements/Badge';
import { Label } from '@/ui/elements/Label';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof Label> & {
  required?: boolean;
};

export const LabelForForm: React.FC<Props> = ({ children, required = false, ...props }) => {
  return (
    <Label {...props}>
      <span className="inline-flex items-center gap-2">
        <span>{children}</span>
        {required ? (
          <Badge variant="error" size="small" outline>
            必須
          </Badge>
        ) : (
          <Badge variant="info" size="small" outline>
            任意
          </Badge>
        )}
      </span>
    </Label>
  );
};
