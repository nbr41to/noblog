/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';

import Head from 'next/head';

import { PageTitle } from '~/commons/PageTitle';

const ShapeByCss: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="CSSで図形を作る" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <Square />
        <Circle />
        <EquilateralTriangle />
        <IsoscelesTriangle acuteAngle={30} radius={100} />
        <Pentagon />
        <Sector angle={60} radius={120} />
        <Sector angle={120} radius={100} />
      </div>
    </div>
  );
};

export default ShapeByCss;

const Square = () => {
  return (
    <div
      className="bg-rose-400 font-bold"
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      Square
    </div>
  );
};

const Circle = () => {
  return (
    <div
      className="bg-blue-500 font-bold"
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
      }}
    >
      Circle
    </div>
  );
};

const EquilateralTriangle = () => {
  const range = 100; // 1辺の長さ
  const height = Math.sqrt(range ** 2 - (range / 2) ** 2); // 高さ

  return (
    <div
      className="font-bold"
      style={{
        width: 0,
        borderLeft: `${range / 2}px solid transparent`,
        borderRight: `${range / 2}px solid transparent`,
        borderBottom: `${height}px solid lime`,
      }}
    >
      Equilateral Triangle
    </div>
  );
};

/* 二等辺三角形 */
const IsoscelesTriangle = ({
  acuteAngle,
  radius,
}: {
  acuteAngle: number;
  radius: number;
}) => {
  const halfBaseRange = radius * Math.sin(((acuteAngle / 2) * Math.PI) / 180); // 底辺の長さ
  const height = radius * Math.cos(((acuteAngle / 2) * Math.PI) / 180); // 高さ

  return (
    <div
      className="font-bold"
      style={{
        width: 0,
        borderLeft: `${halfBaseRange}px solid transparent`,
        borderRight: `${halfBaseRange}px solid transparent`,
        borderBottom: `${height}px solid orange`,
      }}
    ></div>
  );
};

/* 正五角形 */
const Pentagon = () => {
  const interiorAngle = 360 / 5; // 内角
  const getStyle = (rotate: number) =>
    ({
      position: 'absolute',
      transformOrigin: 'top',
      transform: `rotate(${rotate}deg)`,
    }) as const;

  return (
    <div className="relative pt-[100px] pl-[50px] h-[200px]">
      <div style={getStyle(interiorAngle * 0)}>
        <IsoscelesTriangle acuteAngle={interiorAngle} radius={100} />
      </div>
      <div style={getStyle(interiorAngle * 1)}>
        <IsoscelesTriangle acuteAngle={interiorAngle} radius={100} />
      </div>
      <div style={getStyle(interiorAngle * 2)}>
        <IsoscelesTriangle acuteAngle={interiorAngle} radius={100} />
      </div>
      <div style={getStyle(interiorAngle * 3)}>
        <IsoscelesTriangle acuteAngle={interiorAngle} radius={100} />
      </div>
      <div style={getStyle(interiorAngle * 4)}>
        <IsoscelesTriangle acuteAngle={interiorAngle} radius={100} />
      </div>
    </div>
  );
};

/* 扇形 */
const Sector = ({ angle, radius }: { angle: number; radius: number }) => {
  const isAcute = angle <= 90; // 鋭角かどうか
  const leftSectorBgColor = isAcute ? 'bg-orange-100' : 'bg-violet-400';
  const leftContainerRange = isAcute ? radius + 1 : radius;

  return (
    <div className="flex items-end">
      <div
        className={`font-bold bg-orange-100 ${leftSectorBgColor}`}
        style={{
          width: leftContainerRange + 'px',
          height: leftContainerRange + 'px',
          borderRadius: '100% 0 0 0',
          transformOrigin: 'bottom right',
          transform: `rotate(${60}deg)`,
        }}
      ></div>
      <div
        className="font-bold bg-violet-400"
        style={{
          width: radius + 'px',
          height: radius + 'px',
          borderRadius: '0 100% 0 0',
        }}
      ></div>
    </div>
  );
};
