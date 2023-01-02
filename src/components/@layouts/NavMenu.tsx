import type { FC } from 'react';

import { clsx, Transition } from '@mantine/core';
import { useHover } from '@mantine/hooks';
/* icons */
import { AiFillHome, AiTwotoneExperiment } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import { HiMail } from 'react-icons/hi';
import { IoQrCode } from 'react-icons/io5';
import { SiZenn } from 'react-icons/si';
import { TfiGithub } from 'react-icons/tfi';

import { NavMenuExternalLink } from './NavMenuExternalLink';
import { NavMenuLink } from './NavMenuLink';

export const NavMenu: FC = () => {
  const { hovered, ref } = useHover();

  return (
    <nav ref={ref} className="w-fit cursor-pointer p-3 sp:p-0 sp:pl-2">
      <div
        className={clsx(
          'flex flex-col items-center justify-center transition-colors duration-300',
          hovered && 'text-white'
        )}
      >
        <GiCow size={36} />
        <div className=" font-bold sp:text-sm">MENU</div>
      </div>

      <Transition
        mounted={hovered}
        transition="slide-right"
        timingFunction="ease"
        duration={400}
      >
        {(styles) => (
          <div
            className="fixed bottom-0 left-0 -z-10 h-[calc(150vh)] space-y-2 bg-slate-800 px-6 pt-[calc(50vh+100px)]"
            style={styles}
          >
            <NavMenuLink
              leftIcon={<AiFillHome size={18} />}
              href="/"
              label="Home"
            />
            <NavMenuLink
              leftIcon={<FaBook size={16} />}
              href="/posts"
              label="Blogs"
            />
            <NavMenuLink
              leftIcon={<AiTwotoneExperiment size={20} />}
              href="/sandbox"
              label="Sandbox"
            />
            <NavMenuLink
              leftIcon={<BsFillPersonLinesFill size={20} />}
              href="/profile"
              label="Profile"
            />
            <NavMenuLink
              leftIcon={<HiMail size={20} />}
              href="/contact"
              label="Contact"
            />

            <div className="pt-8" />

            {/* External */}
            <NavMenuExternalLink
              icon={<BsTwitter size={18} />}
              href="https://twitter.com/Knob_nbr41to"
              label="Twitter"
            />
            <NavMenuExternalLink
              icon={<TfiGithub size={18} />}
              href="https://github.com/nbr41to"
              label="GitHub"
            />
            <NavMenuExternalLink
              icon={<SiZenn size={18} />}
              href="https://zenn.dev/nbr41to"
              label="Zenn"
            />
            <NavMenuExternalLink
              icon={<BsYoutube size={18} />}
              href="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
              label="YouTube"
            />

            <div className="pt-8" />

            <NavMenuLink
              rightIcon={<IoQrCode size={18} />}
              href="/qrcode.png"
              label="QR Code"
            />
          </div>
        )}
      </Transition>
    </nav>
  );
};
