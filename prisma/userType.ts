// Schema for Database transaction
export type addUserSchema = {
  userId: string;
  name: string;
  team: string;
  phone: string;
  designation: string;
};

export type addRolesSchema = {
  id: number;
  name: string;
  description: string;
  activities: string[];
  competency: CompetencyDBSchema[];
};

export type addAssessmentSchema = {
  competencyId: number;
  competency: string;
  levelId?: number;
  levelNumber: number;
  assessmentType: 'PIAA' | 'SELF' | 'CBP';
  score: string;
  certificateId: string;
  dateOfIssuance: string;
};

export type addFeedbackSchema = {
  dateOfSurveyScore: string;
  certificateId: string;
  overallScore: number;
  competencies: feedbackCompetencies[];
};

export type feedbackCompetencies = {
  id: number;
  name: string;
  levels: {
    name: string;
    id?: number;
    levelNumber: number;
    score: string;
  }[];
};

// Db Schema
export type RoleDBSchema = {
  id: number;
  name: string;
  description: string;
  competencyIds: number[];
  activities: string[];
  totalAssessment: number;
  completedAssessment: number;
};

export type CompetencyDBSchema = {
  id: number;
  name: string;
  levels: LevelDBSchema[];
};

export type LevelDBSchema = {
  id: number;
  levelNumber: number;
  name: string;
};

export type UserDBSchema = {
  id: number;
  userId: string;
  name: string;
  team: string;
  phone: string;
  designation: string;
  roles: RoleDBSchema[];
  competencies: CompetencyDBSchema[];
  assessments: AssessmentDBSchema[];
  feedbacks: FeedbackDBSchema[];
  created: Date;
  updated: Date;
};

export type AssessmentDBSchema = {
  competencyId: number;
  competency: string;
  levelId?: number;
  levelNumber: number;
  assessmentType: 'PIAA' | 'CBP' | 'SELF';
  score?: string | null;
  certificateId: string;
  dateOfIssuance: string;
};

export type FeedbackDBSchema = {
  dateOfSurveyScore: string;
  certificateId: string;
  overallScore: number | string;
  competencies: feedbackCompetencies[];
};
