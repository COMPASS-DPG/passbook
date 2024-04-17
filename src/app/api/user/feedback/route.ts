import fetchRolesFromFrac from '@mock/frac';
import fetchUserById from '@mock/userOrg';
import {
  addFeedback,
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
      dateOfSurveyScore,
      certificateId,
      overallScore,
      competencies,
    } = await req.json();

    if (userId) {
      // Use Prisma to fetch the user based on userId
      const userResponse = await addUser(userId);
      let user = userResponse[0];
      const isNew = userResponse[1];
      // check if user object is there
      if (isNew) {
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

      //addAssessmentSchema = {
      //     competencyId: number,
      //     competency: string
      //     level: number
      //     type: "PIAA"| "SELF" | "CBP",
      //     score: string,
      //     certificateId: string,
      //     dateOfIssuance: string,
      // }
      user = await addFeedback(userId, {
        dateOfSurveyScore,
        certificateId,
        overallScore,
        competencies,
      });
      //response if user is updated
      return NextResponse.json(user, { status: 201 });
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
