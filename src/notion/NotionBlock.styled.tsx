import styled from 'styled-components';
import { colorStyles } from './colorStyles';

export const StyledNotionBlock = styled.div`
  ${colorStyles}
  /* annotation */
  p {
    margin: 12px;
    line-height: 32px;
    > span {
      padding: 0 2px;
      border-radius: 4px;
    }
    > .bold {
      font-weight: bold;
    }
    > .strikethrough {
      text-decoration: line-through;
    }
    > .code {
      font-family: monospace;
      font-size: 14px;
      color: orange;
      background-color: #222;
      padding: 4px 8px;
      margin: 0 4px;
    }
    > a {
      color: blue;
      text-decoration: underline;
      padding: 4px;
      cursor: pointer;
      &:visited {
        color: purple;
      }
      &:hover {
        color: orange;
        border-radius: 4px;
        transition: all 0.2s;
      }
    }
  }

  /* block */
  > .paragraph {
    margin: 8px 0;
  }
  > .heading_2 {
    border-bottom: 2px #666 solid;
    padding: 0 0 4px 8px;
  }
  > .bulleted_list_item {
    padding-left: 12px;
    display: flex;
    align-items: center;
    padding: 4px 0;
    &:before {
      display: block;
      content: '';
      width: 4px;
      height: 4px;
      background-color: #000;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
  > .numbered_list_item {
    padding-left: 12px;
    display: flex;
    align-items: center;
    padding: 4px 0;
    &:before {
      display: block;
      content: '';
      width: 4px;
      height: 4px;
      background-color: #000;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
  .to_do {
    padding: 4px 0;
    display: flex;
    align-items: center;

    &.false {
      &:before {
        content: '';
        width: 16px;
        height: 16px;
        margin-right: 4px;
        border: 1px solid;
        border-radius: 4px;
        border-color: #585753; /* 枠の色変更 お好きな色を */
        background-color: #ffffffcc; /* 背景の色変更 お好きな色を */
      }
    }
    &.true {
      color: #585753;
      text-decoration: line-through;
      &:before {
        content: '';
        width: 14px;
        height: 8px;
        margin: 2px 4px 4px 2px;
        transform: rotate(-45deg);
        border-bottom: 3px solid;
        border-left: 3px solid;
        border-color: #2cfead; /* チェックの色変更 お好きな色を */
      }
    }
  }
`;