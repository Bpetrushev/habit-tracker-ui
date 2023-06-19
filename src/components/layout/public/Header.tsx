'use client';
import { useState } from 'react';
import Logo from '@/components/layout/ui/Logo';

import { MenuIcon, DropDown } from '@/components/layout/ui/MenuPublic';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleShowMobileMenu = (): void => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div className='flex items-center justify-between mx-4 mb-10 mt-5 z-30 relative'>
        <Logo />
        <MenuIcon
          showMobileMenu={showMobileMenu}
          handleShowMobileMenu={handleShowMobileMenu}
        />
      </div>
      <DropDown isVisible={showMobileMenu} />
    </>
  );
};
export default Header;
