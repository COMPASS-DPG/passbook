'use client';
import Link from 'next/link';
import React from 'react';

import RoleCard from '@/components/competency/role/RoleCard';
import NoRoleError from '@/components/errorScreen/NoRoleError';

import { roles } from '@/mockData/roleMock';

import { RoleDataType } from '@/types/type';

const page = () => {
  return (
    <>
      {roles && roles.length === 0 ? (
        roles.map((item: RoleDataType, i) => {
          return (
            <Link key={i} href={`role/${item.id}`}>
              <RoleCard data={item} />
            </Link>
          );
        })
      ) : (
        <NoRoleError />
      )}
    </>
  );
};

export default page;
