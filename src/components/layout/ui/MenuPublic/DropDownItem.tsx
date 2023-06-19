'use client';
import Link from 'next/link';

import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

interface IProps {
  name: string;
  href: string;
}

const DropDownItem = ({ name, href }: IProps) => {
  const commonClasses = 'relative transition-all duration-200';
  return (
    <Link
      href={href}
      className={`${commonClasses} flex justify-between m-3 px-16 py-4 border-y-2 group`}
    >
      <p className='relative text-xl font-bold group-hover:-left-3 '>{name}</p>
      <ChevronDoubleRightIcon
        className={`${commonClasses}relative h-7 w-8 opacity-75 group-hover:left-3`}
      />
    </Link>
  );
};

export default DropDownItem;
