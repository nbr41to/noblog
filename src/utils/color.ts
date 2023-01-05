import type { NotionSelectColor } from '~/types/notion';

export const notionColorToMantineColor = (color: NotionSelectColor) => {
  switch (color) {
    case 'default':
      return 'dark';
    case 'gray':
      return 'gray';
    case 'brown':
      return 'grape';
    case 'orange':
      return 'orange';
    case 'yellow':
      return 'yellow';
    case 'green':
      return 'green';
    case 'blue':
      return 'blue';
    case 'purple':
      return 'violet';
    case 'pink':
      return 'pink';
    case 'red':
      return 'red';
    default:
      return 'gray';
  }
};
