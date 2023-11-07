'use client';
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
} from '@mantine/core';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export function ToggleTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const toggleTheme = () => {
    if (computedColorScheme === 'dark') {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };

  return (
    <Group justify="center">
      <ActionIcon
        radius={9999}
        onClick={toggleTheme}
        variant="default"
        size="lg"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === 'light' ? (
          <BsMoonStarsFill className="text-yellow-400" size={18} />
        ) : (
          <BsSun size={18} />
        )}
      </ActionIcon>
    </Group>
  );
}
