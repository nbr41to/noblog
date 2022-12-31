import { atom } from 'recoil';

export const inViewHeadingIdsAtom = atom<string[]>({
  key: 'inViewHeadingAtom',
  default: [],
});
