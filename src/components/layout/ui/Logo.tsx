'use client';

import { Square3Stack3DIcon } from '@heroicons/react/24/solid';

const Logo = (): JSX.Element => {
  return (
    <div className='flex items-center cursor-pointer'>
      <span className='mr-2'>
        <Square3Stack3DIcon className='h-8 w-8 text-green-600' />
      </span>
      <h1 className='font-bold text-3xl'>Habit Tracker</h1>
    </div>
  );
};

export default Logo;
