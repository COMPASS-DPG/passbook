import { Text, View } from '@react-pdf/renderer';

import { styles } from '@/components/Pdf/passBookStyle';

import { CompetencyPDFType, levelType } from '@/types/type';

type PropType = {
  data: CompetencyPDFType;
  index: number;
};

const TableComponent = ({ data, index }: PropType) => {
  return (
    <>
      <Text style={styles.competency}>
        {index + 1}. {data?.competency}
      </Text>
      <View style={styles.levelContainer}>
        <View style={styles.TableHeader}>
          <Text style={styles.tableHeaderText}>Levels</Text>
          <Text style={styles.tableHeaderText}>WPCAS %</Text>
        </View>

        <View style={styles.levelChart}>
          {data.levels?.map((data: levelType, i: number) => {
            const levelStyle =
              (data.assessmentType == 'PIAA' && styles.level1) ||
              (data.assessmentType == 'CBP' && styles.level2) ||
              (data.assessmentType == 'Self' && styles.level3) ||
              styles.level4;
            return (
              <Text key={i} style={levelStyle}>
                {i + 1}
              </Text>
            );
          })}
        </View>

        <Text style={styles.logText}>Logs</Text>
        {data.levels?.map((data: levelType, i: number) => {
          return (
            <View key={i} style={styles.logsList}>
              <View style={styles.listTextFlex}>
                <View>
                  <Text style={styles.listTextNo}>L{i + 1}.</Text>
                </View>
                <View>
                  <Text style={styles.listText}>{data.level}</Text>
                  <Text style={styles.logsDate}>{data.date}</Text>
                </View>
              </View>
              <View style={styles.listPercentageContainer}>
                <Text style={styles.listPercentage}>{data.percentage}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default TableComponent;
