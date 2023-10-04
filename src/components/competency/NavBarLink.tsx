import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type navLinkType = {
  currentPath: string;
  routeName: string;
};

const NavBarLink = ({ currentPath, routeName }: navLinkType) => {
  const pathname = usePathname();

  return (
    <li
      className={`px-[10px] py-4
            ${
              pathname == currentPath &&
              'border-b-2 border-solid border-[#272728]'
            }`}
    >
      <Link
        href='/role'
        className={`text-lg    
            ${pathname === currentPath ? 'text-[#272728]' : 'text-[#65758C]'} `}
      >
        {routeName}
      </Link>
    </li>
  );
};

export default NavBarLink;
