import { useState, VFC } from 'react';
import styled from 'styled-components';

import { useLikes } from '../../hooks/useLikes';

type LikeButtonProps = {
  className?: string;
  id: string;
};

export const LikeButton: VFC<LikeButtonProps> = ({ className, id }) => {
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
    <StyledLikeButton className={`${className}`} onClick={incrementLikes}>
      {loading ? 'いいね中...' : `いいね！${likes}`}
    </StyledLikeButton>
  );
};

const StyledLikeButton = styled.button`
  width: 140px;
  padding: 8px 16px;
  border: 1px solid #999;
  border-radius: 999px;
  text-align: center;
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.6);
  background-color: palegreen;
  cursor: pointer;

  &:hover {
    position: relative;
    top: 2px;
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.6);
  }
  &:active {
    top: 6px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.6);
    filter: brightness(0.9);
  }
`;
