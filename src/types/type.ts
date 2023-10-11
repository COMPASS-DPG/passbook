export type CompetencyType = {
  competency: string;
  levels: string[];
};

export type levelType = {
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
