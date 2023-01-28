import type { FC } from 'react';

import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';

import {
  ColorGoogleIcon,
  GitHubIcon,
  LogoutIcon,
  TwitterIcon,
} from '~/commons/icons';
import { PageTitle } from '~/commons/PageTitle';
import { useAuth } from '~/hooks/useAuth';
import { baseUrl } from '~/utils/url';

export const LoginTemplate: FC = () => {
  const router = useRouter();
  const callbackPath = decodeURI(router.query.callback as string);

  const { session, provider, isLoading } = useAuth();

  return (
    <div>
      <PageTitle title="login" />
      <div className="w-main mx-auto mt-4 flex items-center justify-center">
        <div className="w-min">
          <div className="h-5 text-xs">
            {session && `${provider}でログイン中 [${session?.user?.name}]`}
            {isLoading && 'Loading...'}
          </div>
          <div className="mx-auto w-72 flex-col space-y-4 rounded border border-solid border-slate-500 p-8">
            <Button
              className="border-blue-700 bg-white text-blue-700 shadow"
              variant="outline"
              fullWidth
              leftIcon={<ColorGoogleIcon size={20} />}
              onClick={() =>
                signIn('google', {
                  callbackUrl:
                    baseUrl + (callbackPath ? callbackPath : '/login'),
                })
              }
            >
              Google
            </Button>
            <Button
              leftIcon={<TwitterIcon size={18} />}
              fullWidth
              disabled
              onClick={() =>
                signIn('google', { callbackUrl: 'http://localhost:3000/login' })
              }
            >
              Twitter
            </Button>
            <Button
              leftIcon={<GitHubIcon size={18} />}
              fullWidth
              disabled
              onClick={() =>
                signIn('google', { callbackUrl: 'http://localhost:3000/login' })
              }
            >
              GitHub
            </Button>
            <Button
              color="dark"
              rightIcon={<LogoutIcon size={18} />}
              fullWidth
              onClick={() =>
                signOut({ callbackUrl: 'http://localhost:3000/login' })
              }
            >
              Sign Out
            </Button>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            アカウントを連携することでブログの一部の機能を使用できます。連携セッションは24時間有効です。アカウントが作成されるわけではありません。
          </p>
        </div>
      </div>
    </div>
  );
};
