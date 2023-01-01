declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type GoogleTagManagerId = `GTM-${string}`;

export const googleTagManagerId =
  (process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as GoogleTagManagerId) || '';

/* イベントを集計するための関数 */
export const countGtm = (): void => {
  window.dataLayer.push({
    event: 'fetch_random_images',
    fetch_random_images_trigger: 'fetch_random_images_trigger', // GTMで設定したイベント名
  });
};
