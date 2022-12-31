declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type GoogleTagManagerId = `GTM-${string}`;

export const googleTagManagerId =
  (process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as GoogleTagManagerId) || '';
