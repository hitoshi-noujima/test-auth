import { AlertText } from '@/ui/elements/AlertText';

type Props = {
  id: string | undefined;
  errors: string[] | undefined;
};

export const FieldErrors: React.FC<Props> = ({ id, errors }) => {
  return (
    <div id={id} aria-live="polite" role="alert">
      {errors?.map((error, index) => (
        <AlertText key={index}>{error}</AlertText>
      ))}
    </div>
  );
};
