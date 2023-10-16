'use client';
import { CompetencyDBSchema, UserDBSchema } from '@prismaClient/userType';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import RoleCard from '@/components/competency/role/RoleCard';
import NoRoleError from '@/components/errorScreen/NoRoleError';

import { CompetencyType, RoleDataType } from '@/types/type';

const Page = () => {
  const [finalRoles, setFinalRoles] = useState<RoleDataType[]>([]);

  // const roles: RoleDataType[]= [];
  useEffect(() => {
    const data = localStorage.getItem('userData') || '';
    if (data !== '') {
      const userInfo: UserDBSchema = JSON.parse(data);
      const competency = userInfo.competencies;
      const tempRoles = userInfo.roles;
      // going through the roles in localstorage to manipulate the data
      const resultRoles = tempRoles.map((role) => {
        //competency list that will hold competency related to this index roles
        const competencyList: CompetencyDBSchema[] = [];
        // going through role and storing the data in above variable
        role.competencyIds.map((competencyId) => {
          const compObj = competency.filter(
            (competencyObj) => competencyObj.id === competencyId
          );
          compObj.map((obj) => competencyList.push(obj));
        });
        // manipulating the data according to things we need
        const resultComptency: CompetencyType[] = competencyList.map(
          (compObj) => {
            return {
              competency: compObj.name,
              levels: compObj.levels.map((level) => {
                return level.name;
              }),
            };
          }
        );
        // returning a list of roles at the end of the loop
        // putting in the format that is needed by role page
        return {
          id: role.id,
          name: role.name,
          status:
            role.completedAssessment > 0
              ? role.completedAssessment >= role.totalAssessment
                ? 'Completed'
                : 'In Progress'
              : 'Yet to be started',
          description: role.description,
          competencies: resultComptency,
        };
      });
      setFinalRoles(resultRoles);
      localStorage.setItem('userRole', JSON.stringify(resultRoles));
    }
  }, [setFinalRoles]);

  if (finalRoles.length < 1) {
    return (
      <div>
        <NoRoleError />
      </div>
    );
  }

  return (
    <>
      {finalRoles.map((item, i) => {
        return (
          <Link key={i} href={`role/${item.id}`}>
            <RoleCard data={item} />
          </Link>
        );
      })}
    </>
  );
};

export default Page;
