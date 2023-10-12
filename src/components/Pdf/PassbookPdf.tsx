'use client';
import {
  Circle,
  Document,
  Page,
  PDFViewer,
  Svg,
  Text,
  View,
} from '@react-pdf/renderer';

import TableComponent from '@/components/Pdf/CompetenciesPdfComponent';
import { styles } from '@/components/Pdf/passBookStyle';

import { pdfMonk } from '@/mockData/pdfMock';

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

const PassbookPdf = () => {
  const pdfData = pdfMonk.competencies as CompetencyPDFType[];

  return (
    <PDFViewer style={styles.pdfViewer}>
      <Document>
        <Page size='A4' style={styles.pageCss} wrap>
          <Text style={styles.compassIcon}>Compass</Text>
          <Text style={styles.headingText}>Competency Passbook</Text>
          <Text style={styles.headingBorder}></Text>
          <View style={styles.overAllCompassContainer}>
            <Text style={styles.overAllCompassText}>Overall WPCAS</Text>
            <View style={styles.dataAndPercentageContainer}>
              <View style={styles.percentageContainer}>
                <Text style={styles.percentageText}>{pdfMonk.aggregate}</Text>
                <Text style={styles.aggregateText}>Aggregate %</Text>
              </View>
              <View style={styles.dateContainer}>
                <View style={styles.rightAlignText}>
                  <Text>PDF Generation Date:</Text>
                </View>
                <View style={styles.rightAlignText}>
                  <Text>{pdfMonk.date}</Text>
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
    </PDFViewer>
  );
};

export default PassbookPdf;
