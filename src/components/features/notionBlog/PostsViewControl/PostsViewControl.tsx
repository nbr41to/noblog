import type { Dispatch, FC, SetStateAction } from 'react';
import type { ViewControl, ViewType } from '~/types/form';
import type { NotionBlogPropertiesWithCount } from '~/types/notion';

import {
  Chip,
  Collapse,
  MultiSelect,
  SegmentedControl,
  Select,
  Switch,
} from '@mantine/core';
import { useState } from 'react';

import { FilterIcon, GridIcon, ListIcon } from '~/commons/icons';

type Props = {
  properties: NotionBlogPropertiesWithCount;
  value: ViewControl;
  onChange: Dispatch<SetStateAction<ViewControl>>;
};

export const PostsViewControl: FC<Props> = ({
  properties,
  value,
  onChange,
}) => {
  const [visibleAllTags, setVisibleAllTags] = useState(true);

  return (
    <div className="space-y-3">
      <SegmentedControl
        className="bg-orange-50"
        value={value.type}
        onChange={(v: ViewType) => onChange((prev) => ({ ...prev, type: v }))}
        data={[
          {
            value: 'grid',
            label: (
              <div className="flex items-center gap-2">
                <GridIcon size={16} />
              </div>
            ),
          },
          {
            value: 'list',
            label: (
              <div className="flex items-center gap-2">
                <ListIcon size={16} />
              </div>
            ),
          },
        ]}
      />
      <div className="flex items-center justify-center gap-2">
        <FilterIcon size={24} />
        <div className="font-baloo text-2xl">Filter</div>
      </div>
      <Select
        label="Article Category"
        placeholder="Pick one"
        allowDeselect
        data={properties.categories.map((category) => ({
          value: category.id,
          label: category.name,
        }))}
        value={value.categoryId}
        onChange={(v) => onChange((prev) => ({ ...prev, categoryId: v || '' }))}
      />
      <MultiSelect
        label="Article Tags"
        placeholder="Pick all that you like"
        clearable
        searchable
        nothingFound="Nothing found"
        data={properties.tags.map((tag) => ({
          value: tag.id,
          label: `${tag.name} (${tag.count})`,
          color: tag.color,
        }))}
        value={value.tagIds}
        onChange={(v) => onChange((prev) => ({ ...prev, tagIds: v }))}
      />
      <Switch
        label="view all tags"
        labelPosition="left"
        onChange={() => setVisibleAllTags((v) => !v)}
      />
      <Collapse in={visibleAllTags}>
        <div className="flex max-h-[600px] flex-wrap gap-1 overflow-y-scroll">
          {properties.tags.map((tag) => (
            <Chip
              key={tag.id}
              color={tag.color}
              size="xs"
              checked={value.tagIds.includes(tag.id)}
              onClick={() =>
                onChange((prev) => ({
                  ...prev,
                  tagIds: prev.tagIds.includes(tag.id)
                    ? prev.tagIds.filter((id) => id !== tag.id)
                    : [...prev.tagIds, tag.id],
                }))
              }
            >
              {`${tag.name} (${tag.count})`}
            </Chip>
          ))}
        </div>
      </Collapse>
    </div>
  );
};
