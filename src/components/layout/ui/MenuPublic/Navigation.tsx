'use client';

import { usePathname } from 'next/navigation';

import DropDownItem from './DropDownItem';
import NavigationItem from './NavigationItem';

const items = [
  { name: 'Sign up', href: '/sign-up' },
  { name: 'Sign in', href: '/sign-in' },
  { name: 'Blog', href: '/blog' },
];

interface IDropDown {
  isVisible: boolean;
  onClick: () => void;
}

export const DropDown = ({ isVisible, onClick }: IDropDown): JSX.Element => {
  return (
    <nav
      className={`flex flex-col fixed left-0 transition-[top] duration-500 ${
        isVisible ? 'top-20' : '-top-full'
      } z-10 h-max h-screen w-full bg-white md:hidden`}
      onClick={onClick}
    >
      {items.map((item, i) => (
        <DropDownItem name={item.name} href={item.href} key={i} />
      ))}
    </nav>
  );
};

export const StandardNavigation = () => {
  const router = usePathname();

  return (
    <nav className='hidden md:flex'>
      {items.map((item, i) => {
        console.log(item.href === router, 'item.href === activeTab');

        return (
          <NavigationItem
            name={item.name}
            href={item.href}
            active={item.href === router}
            key={i}
          />
        );
      })}
    </nav>
  );
};
