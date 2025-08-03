'use client';

import { redirect } from 'next/navigation';
import { useTransition } from 'react';

import { authClient } from '@/shared/lib/auth-client';
import { LoadingButton } from '@/ui/widgets/LoadingButton';

export const SignOutButton: React.FC = () => {
  const [isPending, startTransition] = useTransition();

  const signOutClickHandler = () => {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            redirect('/');
          },
        },
      });
    });
  };

  return (
    <LoadingButton onClick={signOutClickHandler} disabled={isPending} loading={isPending}>
      サインアウトする
    </LoadingButton>
  );
};
