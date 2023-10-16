import { addAssessment, fetchUser } from '@prismaClient/userDbAction';
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
      const user = await fetchUser(userId);
      // check if user object is there
      if (!user) {
        // FIXME: write logic to create user if not there
        // adding logic if user is not there
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
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
