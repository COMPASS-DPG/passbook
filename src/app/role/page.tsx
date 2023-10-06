'use client';
import Link from 'next/link';
import React from 'react';

import RoleCard from '@/components/competency/role/RoleCard';

import { roles } from '@/mockData/roleMock';

const page = () => {
  return (
    <>
      {roles.map((item, i) => {
        return (
          <Link key={i} href={`role/${item.id}`}>
            <RoleCard data={item} />
          </Link>
        );
      })}
    </>
  );
};

export default page;
