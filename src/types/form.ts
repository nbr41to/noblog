export type ViewType = 'grid' | 'list';
export type ViewControl = {
  type: ViewType;
  categoryId: string;
  tagIds: string[];
};
