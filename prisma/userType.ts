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
  competency: CompetencyDBSchema[];
};

export type addAssessmentSchema = {
  competencyId: number;
  competency: string;
  level: number;
  type: 'PIAA' | 'SELF' | 'CBP';
  score: string;
  certificateId: string;
  dateOfIssuance: string;
};

export type addFeedback = {
  dateOfSurveyScore: string;
  certificateId: string;
  overallScore: number;
  competencies: feedbackCompetencies;
};

export type feedbackCompetencies = {
  id: number;
  name: string;
  levels: {
    name: string;
    id?: number;
    level: number;
    score: number;
  }[];
};

// Db Schema
export type RoleDBSchema = {
  id: number;
  name: string;
  description: string;
  competencyIds: number[];
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
  number: number;
  name: string;
};

export type UserDB = {
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
  level: number;
  type: AssessmentType;
  score: string;
  certificateId: string;
  dateOfIssuance: string;
};

enum AssessmentType {
  PIAA = 'PIAA',
  CBP = 'CBP',
  SELF = 'SELF',
}

export type FeedbackDBSchema = {
  dateOfSurveyScore: Date;
  certificateId: string;
  overallScore: number;
  competencies: feedbackCompetencies;
};
