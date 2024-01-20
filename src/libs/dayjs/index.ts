import dayjs from 'dayjs';

export const formatDate = (
  date: dayjs.ConfigType,
  format = 'YYYY/MM/DD',
): string => {
  return dayjs(date).format(format);
};
