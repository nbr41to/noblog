import { format } from "date-fns";
import { ja } from "date-fns/locale/ja";

export const formatDate = (
  date: string | number | Date,
  formatString = "yyyy/MM/dd HH:mm",
) => {
  return format(date, formatString, { locale: ja });
};
