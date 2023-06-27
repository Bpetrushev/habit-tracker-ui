'use client';
import { useState } from 'react';

import Logo from '@/components/layout/ui/Logo';

import {
  MenuIcon,
  DropDown,
  StandardNavigation,
} from '@/components/layout/ui/MenuPublic';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const closeMobileMenu = (): void => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  };

  const handleChangeMobileMenu = (): void => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div className='flex items-center justify-between mx-4 pb-5 mt-5 z-30 relative md:max-w-5xl md:mx-auto'>
        <Logo onClick={closeMobileMenu} />
        <MenuIcon
          showMobileMenu={showMobileMenu}
          handleShowMobileMenu={handleChangeMobileMenu}
        />
        <StandardNavigation />
      </div>
      <div className='border-b-2 mb-5' />
      <DropDown isVisible={showMobileMenu} onClick={closeMobileMenu} />
    </>
  );
};
export default Header;
