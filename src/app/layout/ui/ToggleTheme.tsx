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
        w={40}
        h={40}
      >
        {computedColorScheme === 'light' ? (
          <BsMoonStarsFill className="text-yellow-400" size={18} />
        ) : (
          <BsSun className="text-orange-100" size={18} />
        )}
      </ActionIcon>
    </Group>
  );
}
