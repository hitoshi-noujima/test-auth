import { Time } from '@/ui/elements/Time';
import { formatLocalDateTime } from '@/ui/helpers/format-local-date-time';

interface Props {
  date?: Date;
}

export const FormattedDateTime: React.FC<Props> = ({ date = new Date() }) => {
  const formattedDate = formatLocalDateTime(date);

  return <Time dateTime={date.toISOString()}>{formattedDate}</Time>;
};
