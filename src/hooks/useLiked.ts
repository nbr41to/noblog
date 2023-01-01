import { getLocalStorage, setLocalStorage } from '~/utils/storage';

export const useLiked = (page_id: string) => {
  /* LocalStorageを見てなければIDを追加 */
  const liked = getLocalStorage('liked');
  if (liked && !liked.includes(page_id)) {
    liked.push(page_id);
    setLocalStorage('liked', liked);
  }

  /* LocalStorageを見ていればいいね状態を返す */
  return liked && liked.includes(page_id);
};
