import styled from 'styled-components';

import { colorStyles } from './colorStyles';

export const StyledNotionBlock = styled.div`
  ${colorStyles}
  /* annotation */
  p, li {
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
      word-wrap: break-word;
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

  > .bulleted_list_item,
  .numbered_list_item {
    padding-left: 12px;
    padding: 4px 0;

    &:before {
      display: inline-block;
      content: '';
      width: 6px;
      height: 6px;
      background-color: #000;
      border-radius: 50%;
      position: relative;
      left: -8px;
      top: -4px;
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
        border-color: #585753; /* 枠の色変更 */
        background-color: #ffffffcc; /* 背景の色変更 */
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
        border-color: #2cfead; /* チェックの色変更 */
      }
    }
  }
  .bookmark {
    display: block;
    color: blue;
    text-decoration: underline;
    margin: 8px 0;
    padding: 4px;
    cursor: pointer;
    word-wrap: break-word;

    &:visited {
      color: purple;
    }
    &:hover {
      color: orange;
      border-radius: 4px;
      transition: all 0.2s;
    }
  }
  .image {
    width: 100%;
    max-width: 720px;
    height: 100%;
    min-height: 400px;
    max-height: 720px;
    margin: 8px auto;
    position: relative;
  }
  .video {
    width: 100%;
    max-width: 620px;
    margin: 8px auto;
    display: block;
  }

  /* code block */
  > .code {
    background-color: #111;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;

    > .code_block_label {
      width: min-content;
      padding: 4px 8px;
      margin-top: 4px;
      border: 1px solid #666;
      border-radius: 4px;
    }

    > pre {
      margin: 8px 0;
      border-radius: 4px;
      > code {
        line-height: 24px;
      }
    }
  }
`;
