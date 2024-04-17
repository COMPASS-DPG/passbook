import fetchRolesFromFrac from '@mock/frac';
import fetchUserById from '@mock/userOrg';
import {
  addAssessment,
  addRolesAndCompetency,
  addUser,
  addUserInfo,
} from '@prismaClient/userDbAction';
import { addRolesSchema } from '@prismaClient/userType';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const {
      userId,
      competencyId,
      competency,
      levelNumber,
      type,
      score,
      certificateId,
      dateOfIssuance,
    } = await req.json();

    if (userId) {
      // Use Prisma to fetch the user based on userId
      const [_, isNew] = await addUser(userId);
      // check if user object is there
      if (isNew) {
        // FIXME: write logic to create user if not there
        // adding logic if user is not there
        try {
          const { name, rootOrganization, phone } = await fetchUserById(userId);
          await addUserInfo(
            userId,
            name,
            rootOrganization.team.name,
            phone,
            rootOrganization.position
          );
          // console.log("user info of user has been updated")
          const rolesAndCompetency: { roles: addRolesSchema[] } =
            await fetchRolesFromFrac(userId);
          await addRolesAndCompetency(userId, rolesAndCompetency.roles);
        } catch (err) {
          return NextResponse.json(
            {
              error:
                'User not found, failed to fetch data from userservice/frac',
            },
            { status: 404 }
          );
        }
      }

      await addAssessment(userId, {
        competencyId: competencyId,
        competency: competency,
        levelNumber: levelNumber,
        assessmentType: type,
        score: score,
        certificateId: certificateId,
        dateOfIssuance: dateOfIssuance,
      });
      //response if user is updated
      return NextResponse.json(
        { message: 'assessment has been added' },
        { status: 201 }
      );
    }
    // FIXME: write logic to create user if not there
    // adding logic if user is not there
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    // eslint-disable-next-line no-console
    console.log(NextResponse);
  }
}
