'use client';

import * as React from 'react';

import { Icons } from '@/components/icons';
import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/config/site';

import { MobileNav } from './mobile-nav';

// import { siteConfig } from "@/config/site"
import { MainNavItem } from '@/types';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  // const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className='flex gap-6 md:gap-10'>
      <UnstyledLink href='/' className='hidden items-center space-x-2  md:flex'>
        <Icons.logo />
        <span className='hidden text-xl font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </UnstyledLink>
      {/* {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map((item, index) => (
            <UnstyledLink
              key={index}
              href={item.disabled ? '#' : item.href}
              className={clsxm(
                'hover:text-foreground/80 flex items-center text-lg font-medium transition-colors sm:text-sm',
                'text-foreground',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </UnstyledLink>
          ))}
        </nav>
      ) : null} */}
      <button
        className='flex items-center space-x-2 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className='text-3xl font-bold'>Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
