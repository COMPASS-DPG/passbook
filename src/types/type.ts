export type CompetencyType = {
  competency: string;
  levels: string[];
};

export type levelType = {
  level: string;
  assessmentType: string;
  date: string;
  percentage: string;
};

export type CompetencyPDFType = {
  competency: string;
  levels: levelType[];
};

export type RoleDataType = {
  id: string;
  role: string;
  status: string;
  roleDescription: string[];
  competencies: CompetencyType[];
};

export type CompetencyPDFDataType = {
  date: string;
  aggregate: string;
  competencies: CompetencyPDFType[];
};
