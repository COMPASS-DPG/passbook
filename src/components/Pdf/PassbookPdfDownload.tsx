'use client';
import { FeedbackDBSchema } from '@prismaClient/userType';
import { Circle, Document, Page, Svg, Text, View } from '@react-pdf/renderer';
import React from 'react';

import TableComponent from '@/components/Pdf/CompetenciesPdfComponent';
import { styles } from '@/components/Pdf/passBookStyle';

import { CompetencyPDFType } from '@/types/type';

const PIAASvg = () => (
  <Svg width='10' height='10' viewBox='0 -1 10 10'>
    <Circle cx='4.53786' cy='3.79421' r='3.78151' fill='#7CE780' />
  </Svg>
);

const CBPSvg = () => (
  <Svg width='10' height='10' viewBox='0 -1 10 10'>
    <Circle cx='4.53786' cy='3.79421' r='3.78151' fill='#F8DA72' />
  </Svg>
);

const SelfSvg = () => (
  <Svg width='10' height='10' viewBox='0 -1 10 10'>
    <Circle cx='4.53786' cy='3.79421' r='3.78151' fill='#FF9F46' />
  </Svg>
);

const NotDoneSvg = () => (
  <Svg width='10' height='10' viewBox='0 -1 10 10'>
    <Circle cx='4.53786' cy='3.79421' r='3.78151' fill='#D8D8D8' />
  </Svg>
);

interface PassbookPdfProps {
  pdfFeedback: FeedbackDBSchema;
  pdfData: CompetencyPDFType[];
  userName: string | undefined;
  userId: string | undefined;
}
const PassbookPdfDownload: React.FC<PassbookPdfProps> = ({
  pdfFeedback: pdfFeedback,
  pdfData: pdfData,
  userName,
  userId,
}) => {
  // const pdfData = pdfMonk.competencies as competenciesPdfComponent[];

  return (
    <Document>
      <Page size='A4' style={styles.pageCss} wrap>
        <Text style={styles.compassIcon}>Compass</Text>
        <Text style={styles.headingText}>Competency Passbook</Text>
        <Text style={styles.headingBorder}></Text>
        <View style={styles.overAllCompassContainer}>
          <View style={styles.nameAndIdContainer}>
            <Text style={styles.nameKey}>
              Name: <Text style={styles.nameText}>{userName}</Text>
            </Text>
            <Text style={styles.nameKey}>
              User ID: <Text style={styles.nameText}>{userId}</Text>
            </Text>
          </View>
          <Text style={styles.overAllCompassText}>Overall WPCAS</Text>
          <View style={styles.dataAndPercentageContainer}>
            <View style={styles.percentageContainer}>
              <Text style={styles.percentageText}>
                {pdfFeedback?.overallScore}%
              </Text>
              <Text style={styles.aggregateText}>Aggregate %</Text>
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.rightAlignText}>
                <Text>
                  PDF Generation Date: {new Date().toLocaleDateString('en-GB')}
                </Text>
              </View>
              <View style={styles.rightAlignText}>
                <Text>{pdfFeedback?.dateOfSurveyScore}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.assessmentTypes}>
          <View style={styles.svgContainer}>
            <PIAASvg />
            <Text>PIAA</Text>
          </View>
          <View style={styles.svgContainer}>
            <CBPSvg />
            <Text>CBP</Text>
          </View>
          <View style={styles.svgContainer}>
            <SelfSvg />
            <Text>Self</Text>
          </View>
          <View style={styles.svgContainer}>
            <NotDoneSvg />
            <Text>Not done</Text>
          </View>
        </View>
        <Text style={styles.competencyHeading}>Competencies</Text>
        {pdfData?.map((competency, i) => {
          return <TableComponent key={i} data={competency} index={i} />;
        })}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PassbookPdfDownload;
