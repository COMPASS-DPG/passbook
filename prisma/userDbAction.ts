import prisma from './prisma';
import * as userType from './userType';
import { addRolesSchema } from './userType';

export const fetchUser = async (userUUId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: userUUId,
    },
  });

  if (user) {
    return user;
  } else {
    return null;
  }
};

export const addUser = async (userUUID: string) => {
  const user = await fetchUser(userUUID);
  if (!user) {
    const userObj = await prisma.user.create({
      data: {
        userId: userUUID,
        name: '',
        team: '',
        phone: '',
        designation: '',
        roles: [],
        assessments: [],
        competencies: [],
        feedbacks: [],
      },
    });
    return [userObj, true];
  } else {
    return [user, false];
  }
};

export const addUserInfo = async (
  userUUID: string,
  name: string,
  team: string,
  phone: string,
  designation: string
) => {
  const user = await fetchUser(userUUID);
  if (user) {
    const userObj = await prisma.user.update({
      where: {
        userId: userUUID,
      },
      data: {
        name: name,
        team: team,
        phone: phone,
        designation: designation,
      },
    });
    return userObj;
  } else {
    throw new Error('No user present for the adding info');
  }
};

export const addRolesAndCompetency = async (
  userId: string,
  roles: addRolesSchema[]
) => {
  const user = await fetchUser(userId);
  const competenciesResult: userType.CompetencyDBSchema[] = [];
  const roleResult: userType.RoleDBSchema[] = [];

  roles.map((role) => {
    roleResult.push({
      id: role.id,
      name: role.name,
      description: role.description,
      competencyIds: role.competency.map((competency) => competency.id),
      totalAssessment: 0,
      completedAssessment: 0,
    });
    competenciesResult.push(...role.competency);
  });
  if (user) {
    await prisma.user.update({
      where: {
        userId: userId,
      },
      data: {
        roles: roleResult,
        competencies: competenciesResult,
      },
    });
  }
};

export const addAssessment = async (
  userId: string,
  assessmentInfo: userType.addAssessmentSchema
) => {
  // const user = await fetchUser(userId);
  const userInfo = await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      assessments: {
        push: assessmentInfo,
      },
    },
  });
  return userInfo;
};

export const removeAssessment = async (
  userId: string,
  assessmentInfo: userType.addAssessmentSchema
) => {
  const user = await prisma.user.findUnique({
    where: {
      // Specify the user by userId
      userId: userId,
    },
  });
  const userObject = user;
  const oldAssessments = userObject?.assessments;
  if (oldAssessments) {
    const newAssessments = oldAssessments.filter((obj) => {
      return (
        obj.competencyId !== assessmentInfo.competencyId ||
        obj.level !== assessmentInfo.level ||
        obj.type !== assessmentInfo.type
      );
    });
    await prisma.user.update({
      where: {
        userId: userId,
      },
      data: {
        assessments: newAssessments,
      },
    });
  }
};

export const addFeedback = async (
  userId: string,
  feedback: userType.addFeedback
) => {
  // const user = await fetchUser(userId);
  const userObj = await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      feedbacks: {
        push: feedback,
      },
    },
  });
  return userObj;
};
