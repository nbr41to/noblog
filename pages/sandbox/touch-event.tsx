/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';
import type { FC } from 'react';

import { CodeHighlight } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import { clsx } from 'clsx';
import Head from 'next/head';
import { memo, useEffect, useRef, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';

const colors: {
  [key: number]: string;
} = {
  0: 'none',
  1: 'red',
  2: 'blue',
  3: 'green',
};

const board = [
  [1, 2, 3, 1, 2, 3],
  [2, 3, 1, 2, 3, 1],
  [3, 1, 2, 3, 1, 2],
  [1, 2, 3, 1, 2, 3],
  [2, 3, 1, 2, 3, 1],
];

const generateBoard = () => {
  const newBoard = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 6; j++) {
      row.push(Math.floor(Math.random() * 3) + 1);
    }
    newBoard.push(row);
  }

  return newBoard;
};

const TouchEvent: NextPage = () => {
  const [pushed1, setPushed1] = useState(false);
  const [pushed2, setPushed2] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [boardState, setBoardState] = useState(board);
  const active = useRef<[number, number] | null>(null);
  // console.log(activeDropItem);

  /* no scroll */
  useEffect(() => {
    const handler = (e: TouchEvent) => {
      e.preventDefault();
    };
    document.addEventListener('touchmove', handler, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handler);
    };
  }, []);

  type DropItemProps = {
    color: string;
    position: [number, number];
  };
  const DropItem: FC<DropItemProps> = memo(({ color, position }) => {
    const colorClass = `bg-${color}-500`;

    const handleDragEnter = () => {
      if (!active.current) return;
      if (
        active.current[0] === position[0] &&
        active.current[1] === position[1]
      )
        return;
      switchDropItem(active.current, position);
      active.current = position;
    };

    return (
      <div
        className={clsx([
          'h-[40px] w-[40px] cursor-move p-0.5 active:opacity-50',
        ])}
        draggable
        onDragStart={() => {
          active.current = position;
        }}
        onDragEnter={handleDragEnter}
        onTouchMove={handleDragEnter}
        onTouchStart={() => {
          active.current = position;
        }}
        onTouchEnd={() => {
          active.current = null;
        }}
      >
        <div className={clsx([colorClass, 'h-full w-full rounded-full'])}></div>
      </div>
    );
  });
  DropItem.displayName = 'DropItem';

  const switchDropItem = (
    [i1, j1]: [number, number],
    [i2, j2]: [number, number],
  ) => {
    const newBoardState = [...boardState];
    const tmp = newBoardState[i1][j1];
    newBoardState[i1][j1] = newBoardState[i2][j2];
    newBoardState[i2][j2] = tmp;
    setBoardState(newBoardState);
  };

  function replaceNumbers() {
    const resultBoard = [...boardState];
    const rows = boardState.length;
    const columns = boardState[0].length;

    // 横のチェック
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns - 2; column++) {
        const currentNum = board[row][column];
        for (let i = column; i < columns - 2; i++) {
          if (currentNum !== board[row][i + 1]) break;
          if (currentNum === board[row][i + 1]) {
            if (currentNum === board[row][i + 2]) {
              resultBoard[row][column] = 0;
              resultBoard[row][column + 1] = 0;
              resultBoard[row][column + 2] = 0;
            }
          }
        }
      }
    }

    // 縦のチェック
    for (let column = 0; column < columns; column++) {
      for (let row = 0; row < rows - 2; row++) {
        const currentNum = board[row][column];
        if (
          currentNum === board[row + 1][column] &&
          currentNum === board[row + 2][column]
        ) {
          resultBoard[row][column] = 0;
          resultBoard[row + 1][column] = 0;
          resultBoard[row + 2][column] = 0;
        }
      }
    }

    setBoardState(resultBoard);
  }

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="スマホのonTouch イベント" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <div>2つのボタンの同時押し判定を検証</div>
        <div className="flex gap-10">
          <div>touch1: {pushed1 ? 'true' : 'false'}</div>
          <div>touch2: {pushed2 ? 'true' : 'false'}</div>
        </div>
        <Button
          onTouchStart={(e) => {
            e.preventDefault();
            setPushed1(true);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            setPushed1(false);
          }}
          onTouchMove={(e) => {
            e.preventDefault();
            setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
          }}
        >
          touch1
        </Button>
        <Button
          onTouchStart={(e) => {
            e.preventDefault();
            setPushed2(true);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            setPushed2(false);
          }}
        >
          touch2
        </Button>

        <br />
        <div className="relative">
          <Button
            draggable
            onTouchMove={(e) => {
              e.preventDefault();
              setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
            }}
            onDrag={(e) => {
              e.preventDefault();
              setPosition({ x: e.clientX, y: e.clientY });
            }}
          >
            touch move
          </Button>
        </div>
        <div>position: {JSON.stringify(position)}</div>

        <div>これでなんか作る</div>
        <div className="h-[200px] w-[240px] rounded outline outline-1 outline-gray-800">
          {boardState.map((row, i) => (
            <div key={`row-${i}`} className="flex">
              {row.map((col, j) => (
                <DropItem
                  key={`col-${i}-${j}`}
                  color={colors[col]}
                  position={[i, j]}
                />
              ))}
            </div>
          ))}
        </div>
        <Button onClick={() => setBoardState(generateBoard())}>refresh</Button>
        <Button onClick={() => replaceNumbers()}>decide</Button>

        <CodeHighlight
          code={`import SvgComponent from '../../public/makoto.svg';
  ...
  <SvgComponent />`}
        />
      </div>
    </div>
  );
};

export default TouchEvent;
