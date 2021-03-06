import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import * as React from 'react';
import { existsGaId, GA_ID } from 'src/utils/gtag';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element;
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          {existsGaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="のまど先生の生存確認ブログ。Notion API と Next.js で作成。主にプログラミングと心理学に関する知見をアウトプットしています。"
            key="desc"
          />
          <meta property="og:title" content="noblog" />
          <meta
            property="og:description"
            content="のまど先生の生存確認ブログ。Notion API と Next.js で作成。主にプログラミングと心理学に関する知見をアウトプットしています。"
          />
          <meta property="og:type" content="blog" />
          <meta property="og:url" content="https://nbr41.com/" />
          <meta property="og:image" content="/site_image.png" />
          <meta property="og:site_name" content="noblog" />
          <meta property="og:locale" content="ja_JP" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Knob_nbr41to" />
          <meta
            name="twitter:image"
            content="https://nbr41.com/site_image.png"
          />

          <meta name="robots" content="all" />
          {/* TODO)各ページにメタタグ入れよう */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
