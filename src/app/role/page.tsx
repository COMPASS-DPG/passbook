'use client';
import { CompetencyDBSchema, UserDB } from '@prismaClient/userType';
import Link from 'next/link';
import React from 'react';

import RoleCard from '@/components/competency/role/RoleCard';

import { CompetencyType, RoleDataType } from '@/types/type';

const page = () => {
  const userData = localStorage.getItem('userData');
  // const roles: RoleDataType[]= [];
  let finalRoles: RoleDataType[] = [];

  if (userData !== null) {
    const userInfo: UserDB = JSON.parse(userData);
    const competency = userInfo.competencies;
    const tempRoles = userInfo.roles;
    // going through the roles in localstorage to manipulate the data
    finalRoles = tempRoles.map((role) => {
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

    localStorage.setItem('userRole', JSON.stringify(finalRoles));
  }

  if (finalRoles.length < 1) {
    return (
      <div>
        <h2>No roles Attached to your designation</h2>
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

export default page;
