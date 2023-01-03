import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';

export const useNoticeRendering = (componentName: string) => {
  const [isInitialized, setIsInitialized] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);

      return;
    }

    showNotification({
      title: componentName + ' is rendering',
      message: componentName + 'がレンダリングされました',
    });
  });
};
