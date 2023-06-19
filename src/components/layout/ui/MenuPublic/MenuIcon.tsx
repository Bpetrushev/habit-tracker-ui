'use client';
import { useEffect } from 'react';

const MenuIcon = ({
  showMobileMenu,
  handleShowMobileMenu,
}: {
  showMobileMenu: boolean;
  handleShowMobileMenu: () => void;
}): JSX.Element => {
  useEffect(() => {
    const body = document.body;
    if (showMobileMenu) {
      body.classList.add('overflow-hidden');
    }
    if (!showMobileMenu) {
      body.classList.remove('overflow-hidden');
    }
  }, [showMobileMenu]);

  const genericHamburgerLine = `h-9 w-9 my-1 rounded-full bg-green-600 transition ease transform duration-300`;
  return (
    <button
      className='flex flex-col h-9 w-9 rounded justify-center items-center group'
      onClick={() => handleShowMobileMenu()}
    >
      <div
        className={`${genericHamburgerLine} ${
          showMobileMenu
            ? 'rotate-45 translate-y-3 opacity-75 group-hover:opacity-100'
            : 'opacity-75 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          showMobileMenu ? 'opacity-0' : 'opacity-75 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          showMobileMenu
            ? '-rotate-45 -translate-y-3 opacity-75 group-hover:opacity-100'
            : 'opacity-75 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export default MenuIcon;
