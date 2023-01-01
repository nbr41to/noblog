import { Html, Head, Main, NextScript } from 'next/document';

import { googleTagManagerId } from '~/types/gtm';

export default function Document() {
  return (
    <Html lang="ja-JP" className="scroll-smooth">
      <Head />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
