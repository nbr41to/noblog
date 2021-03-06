import { useState, VFC } from 'react';
import styled from 'styled-components';

import { useLikes } from '../../hooks/useLikes';

type LikeButtonProps = {
  className?: string;
  id: string;
};

export const LikeButtonArea: VFC<LikeButtonProps> = ({ className, id }) => {
  const { likes, setLikes } = useLikes(id);
  const [loading, setLoading] = useState(false);

  const incrementLikes = async () => {
    setLoading(true);
    await fetch('/api/post/increment-likes', {
      method: 'POST',
      body: JSON.stringify({ page_id: id, current_likes: likes }),
    });
    setLikes(likes + 1);
    setLoading(false);
  };

  return (
    <StyledLikeButton
      className={`${className}`}
      disabled={loading}
      onClick={incrementLikes}
    >
      {loading ? 'いいね中...' : `いいね！${likes || '0'}`}
    </StyledLikeButton>
  );
};

const StyledLikeButton = styled.button`
  padding: 8px 16px;
  width: 140px;
  border: 1px solid #999;
  border-radius: 999px;
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.7);
  background-color: palegreen;
  text-align: center;
  font-weight: bold;
  color: #333;
  cursor: pointer;

  /* animation */
  animation: bound 2s ease-in-out infinite;
  @keyframes bound {
    0% {
      transform: translateX(0) scale(1);
    }
    50% {
      transform: translateX(-140px) scale(0.9, 1.1);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }

  &:hover {
    position: relative;
    top: 2px;
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.7);
    animation-play-state: paused;
  }
  &:active {
    position: relative;
    top: 6px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.7);
    filter: brightness(0.9);
    animation-play-state: paused;
  }
  &:disabled {
    position: relative;
    top: 6px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.7);

    background-color: tomato;
    color: #fff;
    cursor: not-allowed;
    animation-play-state: paused;
  }
`;
