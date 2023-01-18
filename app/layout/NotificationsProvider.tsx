'use client';

import type { ReactNode } from 'react';

import { NotificationsProvider as MantineNotificationsProvider } from '@mantine/notifications';

export const NotificationsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <MantineNotificationsProvider position="top-center">
      {children}
    </MantineNotificationsProvider>
  );
};
