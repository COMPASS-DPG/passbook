export type CompetencyType = {
  competency: string;
  levels: string[];
};

export type pdfLevelType = {
  percentage: string;
  level: string;
  assessmentType: 'PIAA' | 'CBP' | 'SELF' | 'NONE';
  date?: string;
  certificateId: string;
};

export type CompetencyPDFType = {
  competency: string;
  levels: pdfLevelType[];
};

export type RoleDataType = {
  id: number;
  name: string;
  status: string;
  description: string;
  competencies: CompetencyType[];
};

export type CompetencyPDFDataType = {
  date: string;
  aggregate: string;
  competencies: CompetencyPDFType[];
};

export type LevelWithAssessmentData = {
  name: string;
  levelNumber: number;
  assesstmentType: 'PIAA' | 'CBP' | 'SELF' | 'NONE';
  dateOfIssuance: string;
  certificateId: string;
};

export type LevelWithFeedbackData = {
  name: string;
  levelNumber: number;
  score: string;
};

export type ChildrenType = {
  children: React.ReactNode;
};

export type SurveyType = {
  id: string;
  name: string;
  role: string;
  providedFeedback: boolean;
  getFeedback: boolean;
  questions: string[];
};
