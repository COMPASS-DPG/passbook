import { addFeedback, fetchUser } from '@prismaClient/userDbAction';
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
      let user = await fetchUser(userId);
      // check if user object is there
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
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
