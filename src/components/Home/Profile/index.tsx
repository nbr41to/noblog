import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Loader } from '@/components/Loader';

import ProfileMdx from './Profile.mdx';
export const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <h2 id="profile">Profile</h2>
      <div className="myphoto_wrapper">
        <div className="myphoto">
          <Image
            src="/myphoto.png"
            alt="myphoto"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Loader className="loader" />
      </div>
      <ProfileMdx />
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    width: 100%;
    text-align: left;
  }
  .myphoto_wrapper {
    width: 260px;
    border: 8px solid #666;
    border-radius: 50%;
    margin: 24px auto;
    position: relative;
    overflow: hidden;
    .myphoto {
      /* 縦横比固定 */
      position: relative;
      width: 100%;
      padding-top: 100%;
      z-index: 1;
    }
    .loader {
      position: absolute;
      top: 16px;
      left: 24px;
    }
  }
`;
const StyledMoreDetails = styled.a`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #444;
  background: linear-gradient(to left, #fff, #d6e8ff, #fff);
  &:hover {
    cursor: pointer;
    background: linear-gradient(to left, #fff, peachpuff, #fff);
    transition: 0.8s;
  }
  &:active {
    background: linear-gradient(to left, #fff, orange, #fff);
    color: #fff;
  }
`;
