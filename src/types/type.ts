export type CompetencyType = {
  competency: string;
  levels: string[];
};

export type levelType = {
  percentage: string;
  level: string;
  assessmentType: string;
  date: string;
};

export type CompetencyPDFType = {
  competency: string;
  levels: levelType[];
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
