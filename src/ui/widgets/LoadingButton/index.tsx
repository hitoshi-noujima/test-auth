import { Button } from '@/ui/elements/Button';
import { Loading } from '@/ui/elements/Loading';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof Button> & {
  loading?: boolean;
};

export const LoadingButton: React.FC<Props> = ({ loading = false, children, ...props }) => {
  return (
    <Button {...props}>
      {loading && <Loading />}
      {children}
    </Button>
  );
};
