'use client';

import { Transition } from '@mantine/core';
import { useHover, useMergedRef } from '@mantine/hooks';
import { clsx } from 'clsx';
import { useState, type FC, useEffect, useRef } from 'react';

import {
  ExperimentIcon,
  GitHubOctocatIcon,
  HomeIcon,
  ProfileIcon,
  TwitterIcon,
  ZennIcon,
  YouTubeIcon,
  QrCodeIcon,
  MailIcon,
  BookIcon,
  CowIcon,
} from '@/components/@commons/icons';

import { NavMenuExternalLink } from './NavMenuExternalLink';
import { NavMenuLink } from './NavMenuLink';

export const NavMenu: FC = () => {
  const { hovered, ref: useHoverRef } = useHover();
  const menuRef = useRef<HTMLDivElement>(null);
  const ref = useMergedRef(menuRef, useHoverRef);
  const [focused, setFocused] = useState(false);
  const mounted = hovered || focused;

  useEffect(() => {
    const handleFocusOutside = (event: FocusEvent) => {
      if (!event.target) return;
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setFocused(false);
      }
    };

    document.addEventListener('focusin', handleFocusOutside);

    return () => {
      document.removeEventListener('focusin', handleFocusOutside);
    };
  }, [ref, setFocused]);

  return (
    <nav ref={ref} className="w-fit cursor-pointer p-3 sp:p-0 sp:pl-2">
      <div
        role="button"
        tabIndex={0}
        onFocus={() => setFocused(true)}
        className={clsx(
          'flex flex-col items-center justify-center transition-colors duration-300',
          mounted && 'text-white',
        )}
      >
        <CowIcon size={36} />
        <div className=" font-bold sp:text-sm">MENU</div>
      </div>

      <Transition
        mounted={mounted}
        transition="slide-right"
        timingFunction="ease"
        duration={400}
      >
        {(styles) => (
          <div
            className="fixed left-0 top-0 -z-10 h-screen space-y-2 bg-slate-800 px-6 pt-28 dark:bg-slate-900"
            role="navigation"
            style={styles}
          >
            <NavMenuLink
              leftIcon={<HomeIcon size={18} />}
              href="/"
              label="Home"
            />
            <NavMenuLink
              leftIcon={<BookIcon size={16} />}
              href="/posts"
              label="Blogs"
            />
            <NavMenuLink
              leftIcon={<ExperimentIcon size={20} />}
              href="/sandbox"
              label="Sandbox"
            />
            <NavMenuLink
              leftIcon={<ProfileIcon size={20} />}
              href="/profile"
              label="Profile"
            />
            <NavMenuLink
              leftIcon={<MailIcon size={20} />}
              href="/contact"
              label="Contact"
            />

            <div className="pt-8" />

            {/* External */}
            <NavMenuExternalLink
              icon={<TwitterIcon size={18} />}
              href="https://twitter.com/Knob_nbr41to"
              label="Twitter"
            />
            <NavMenuExternalLink
              icon={<GitHubOctocatIcon size={18} />}
              href="https://github.com/nbr41to"
              label="GitHub"
            />
            <NavMenuExternalLink
              icon={<ZennIcon size={18} />}
              href="https://zenn.dev/nbr41to"
              label="Zenn"
            />
            <NavMenuExternalLink
              icon={<YouTubeIcon size={18} />}
              href="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
              label="YouTube"
            />

            <div className="pt-8" />

            <NavMenuLink
              rightIcon={<QrCodeIcon size={18} />}
              href="/qrcode.png"
              label="QR Code"
            />
          </div>
        )}
      </Transition>
    </nav>
  );
};
