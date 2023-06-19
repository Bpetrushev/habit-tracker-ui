'use client';

import DropDownItem from './DropDownItem';

const items = [
  { name: 'Sign up', href: '/sign-up' },
  { name: 'Sign in', href: '/sign-in' },
  { name: 'Blog', href: '/blog' },
];

const DropDown = ({ isVisible }: { isVisible: boolean }): JSX.Element => {
  return (
    <div
      className={`flex flex-col fixed left-0 transition-[top] duration-500 ${
        isVisible ? 'top-20' : '-top-full'
      } z-10 border-t-2 h-max h-screen w-full bg-white`}
    >
      {items.map((item, i) => (
        <DropDownItem name={item.name} href={item.href} key={i} />
      ))}
    </div>
  );
};

export default DropDown;
