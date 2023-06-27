'use client';

import Link from 'next/link';

interface IProps {
  name: string;
  href: string;
  active: boolean;
}
const NavigationItem = ({ name, href, active }: IProps) => {
  return (
    <Link href={href}>
      <p
        className={`text-l font-bold p-1 m-1 border-b-2 border-transparent ${
          active && 'border-green-700 text-green-700'
        } hover:border-green-600 hover:text-green-600`}
      >
        {name}
      </p>
    </Link>
  );
};

export default NavigationItem;
