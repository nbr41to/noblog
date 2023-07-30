/* Local Storageの操作 */
export const getLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return null;

  const value = window.localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setLocalStorage = (key: string, value: any) => {
  if (typeof window === 'undefined') return null;

  window.localStorage.setItem(key, JSON.stringify(value));
};
