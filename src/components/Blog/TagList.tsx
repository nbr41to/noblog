import { LockOff, LockOn } from 'akar-icons';
import { VFC } from 'react';
import styled from 'styled-components';

import { NotionSelectOption } from '@/type/notion';

import { SelectOptionButton } from './_SelectOptionButton';

type TagListProps = {
  className?: string;
  items: NotionSelectOption[];
  selectedIds: string[];
  isEvery: boolean;
  onClick: (id: string) => void;
  onToggle: () => void;
};

export const TagList: VFC<TagListProps> = ({
  className,
  items,
  selectedIds,
  isEvery,
  onClick,
  onToggle,
}) => {
  const lineIndex = Math.ceil(items.length / 3);
  const itemGroups = [
    items.slice(0, lineIndex),
    items.slice(lineIndex, lineIndex * 2),
    items.slice(lineIndex * 2),
  ];

  return (
    <StyledTagList className={`${className}`} isEvery={isEvery}>
      <div className="tag_list_header">
        <h2>Tag</h2>
        <button type="button" onClick={onToggle}>
          {isEvery ? <LockOn size={28} /> : <LockOff size={28} />}
        </button>
      </div>
      <div className="flat_list_wrapper">
        {itemGroups.map((items, index) => (
          <div key={index} className="flat_list">
            {items.map((item) => {
              const { id, color, name } = item;
              return (
                <SelectOptionButton
                  className="m-4"
                  key={id}
                  color={color}
                  name={name}
                  selected={selectedIds.includes(id)}
                  onClick={() => onClick(id)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </StyledTagList>
  );
};

const StyledTagList = styled.div<{ isEvery: boolean }>`
  > .tag_list_header {
    display: flex;
    align-items: center;

    > button {
      margin-left: 12px;
      padding-top: 4px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;

      &:before {
        content: '';
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color: #333;
        opacity: 0;

        position: absolute;
        inset: 0;
        left: -12.5px;
        margin: auto;
      }

      &:active {
        &:before {
          opacity: 0.3;
          transition: all 0.4s;
        }
      }

      > svg {
        color: ${(props) => (props.isEvery ? '#000' : '#444')};
      }
    }
  }
  > .flat_list_wrapper {
    margin: 16px 0;
    > .flat_list {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      overflow-x: scroll;
    }
  }
`;
