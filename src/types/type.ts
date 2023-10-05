export type CompetencyType = {
  competency: string;
  levels: string[];
};

export type RoleDataType = {
  id: string;
  role: string;
  status: string;
  roleDescription: string[];
  competencies: CompetencyType[];
};
