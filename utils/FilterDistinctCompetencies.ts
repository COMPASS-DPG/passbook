import { CompetencyDBSchema } from '@prismaClient/userType';

const filterDistinctCompetencies = (
  competencyArray: CompetencyDBSchema[]
): CompetencyDBSchema[] => {
  const distinctCompetencies: CompetencyDBSchema[] = [];
  const seenIds: Set<number> = new Set();

  competencyArray.forEach((competency) => {
    if (!seenIds.has(competency.id)) {
      distinctCompetencies.push(competency);
      seenIds.add(competency.id);
    }
  });
  return distinctCompetencies;
};

export default filterDistinctCompetencies;
