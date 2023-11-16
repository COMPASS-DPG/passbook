'use client';
import { Text, View } from '@react-pdf/renderer';

import { styles } from '@/components/Pdf/passBookStyle';

import { CompetencyPDFType, pdfLevelType } from '@/types/type';

type PropType = {
  data: CompetencyPDFType;
  index: number;
};

const TableComponent = ({ data, index }: PropType) => {
  return (
    <View wrap={false} style={styles.mainCompetencyContainer}>
      <Text style={styles.competency}>
        {index + 1}. {data?.competency}
      </Text>
      <View style={styles.levelContainer}>
        <View style={styles.TableHeader}>
          <Text style={styles.tableHeaderText}>Levels</Text>
          <Text style={styles.tableHeaderText}>WPCAS %</Text>
        </View>

        <View style={styles.levelChart}>
          {data.levels?.map((data: pdfLevelType, i: number) => {
            const levelStyle =
              (data.assessmentType == 'PIAA' && styles.level1) ||
              (data.assessmentType == 'CBP' && styles.level2) ||
              (data.assessmentType == 'SELF' && styles.level3) ||
              styles.level4;
            return (
              <Text key={i} style={levelStyle}>
                {i + 1}
              </Text>
            );
          })}
        </View>

        <Text style={styles.logText}>Logs</Text>
        {data.levels?.map((data: pdfLevelType, i: number) => {
          return (
            <View
              key={i}
              style={
                data.assessmentType == 'NONE'
                  ? styles.logsListWithGrayColor
                  : styles.logsList
              }
            >
              <View style={styles.listTextFlex}>
                <View>
                  <Text style={styles.listTextNo}>L{i + 1}.</Text>
                </View>
                <View>
                  <Text style={styles.listText}>{data.level}</Text>
                  <View style={styles.surveyDateContainer}>
                    {data.assessmentType !== 'NONE' && (
                      <>
                        <Text style={styles.surveyDate}>
                          Certificate Date:{' '}
                        </Text>
                        <Text style={styles.logsDateGrayColor}>
                          {data?.date}
                        </Text>
                      </>
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.listPercentageContainer}>
                <Text
                  style={
                    parseInt(data.percentage) >= 60
                      ? styles.listPercentageGreen
                      : styles.listPercentageRed
                  }
                >
                  {data?.percentage}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TableComponent;
