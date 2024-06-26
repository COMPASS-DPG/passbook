'use client';
import { Font, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Oxanium',
  src: 'https://fonts.gstatic.com/s/oxanium/v19/RrQPboN_4yJ0JmiMUW7sIGjd1IA9G82XeXiMBXQ7d67x.ttf',
});

Font.register({
  family: 'Lato',
  fonts: [
    {
      src: '/fonts/Lato-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: '/fonts/Lato-Italic.ttf',
      fontWeight: 400,
      fontStyle: 'italic',
    },
  ],
});

Font.register({
  family: 'Times New Roman',
  src: '/fonts/times.ttf',
});

Font.register({
  family: 'Times',
  src: '/fonts/times.ttf',
});

Font.register({
  family: 'Lucida Handwriting',
  src: '/fonts/LucidaHandwritingStdBlack.TTF',
});

Font.register({
  family: 'Outfit',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4QK1C4G-EiAou6Y.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4e6yC4G-EiAou6Y.ttf',
      fontWeight: 600,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4deyC4G-EiAou6Y.ttf',
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: 'Lato',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf',
      fontWeight: 700,
    },
  ],
});

export const styles = StyleSheet.create({
  competency: {
    fontFamily: 'Outfit',
    color: '#272728',
    fontSize: '10px',
    fontWeight: 'semibold',
    marginBottom: '12px',
  },
  levelContainer: {
    margin: '0px 3px 0px 12px',
  },
  TableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeaderText: {
    fontFamily: 'Outfit',
    fontSize: '9px',
    fontWeight: 'semibold',
  },
  levelChart: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5px',
  },
  logText: {
    fontFamily: 'Outfit',
    fontSize: '10px',
    color: '#272728',
    fontWeight: 'semibold',
    marginTop: '12px',
  },
  logsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#272728',
    paddingVertical: '9px',
    borderBottom: '1px solid #65758C',
  },
  logsListWithGrayColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '9px',
    borderBottom: '1px solid #65758C',
    color: 'gray',
  },
  listTextNo: {
    fontFamily: 'Outfit',
    fontSize: '9px',
    fontWeight: 'normal',
  },
  listText: {
    fontFamily: 'Outfit',
    fontSize: '9px',
    fontWeight: 'normal',
    width: '85%',
    textAlign: 'justify',
  },

  listTextFlex: {
    fontFamily: 'Outfit',
    fontWeight: 'normal',
    flexDirection: 'row',
    gap: '5px',
  },
  logsDate: {
    fontFamily: 'Outfit',
    color: '#65758C',
    fontSize: '9px',
    fontWeight: 'normal',
  },
  logsDateGrayColor: {
    fontFamily: 'Outfit',
    color: 'gray',
    fontSize: '9px',
    fontWeight: 'normal',
    marginVertical: '5px',
  },
  listPercentageContainer: {
    textAlign: 'center',
    width: '40px',
  },
  listPercentageRed: {
    fontFamily: 'Outfit',
    color: 'red',
    fontSize: '9px',
    fontWeight: 'medium',
  },
  listPercentageGreen: {
    fontFamily: 'Outfit',
    color: '#7CE780',
    fontSize: '9px',
    fontWeight: 'medium',
  },
  compassIcon: {
    fontFamily: 'Oxanium',
    textAlign: 'center',
    fontSize: '25px',
    color: '#65758C',
    fontWeight: 'semibold',
  },
  pdfViewer: {
    width: '100vw',
    height: '100vw',
  },
  pageCss: {
    padding: '20px 30px',
  },
  headingText: {
    fontFamily: 'Outfit',
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '9px',
    color: '#272728',
    fontWeight: 'semibold',
  },
  headingBorder: {
    borderBottom: '2px solid #385B8B',
    marginBottom: '3px',
  },
  overAllCompassContainer: {
    border: '1px solid #FFE073',
    backgroundColor: '#FFF7DA',
    borderRadius: '5px',
    height: 'auto',
    padding: '6px 10px',
    marginBottom: '12px',
  },
  overAllCompassText: {
    fontFamily: 'Outfit',
    fontSize: '11px',
    fontWeight: 'medium',
    color: '#272728',
  },
  dataAndPercentageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percentageText: {
    fontFamily: 'Outfit',
    color: '#385B8B',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  aggregateText: {
    fontFamily: 'Outfit',
    color: '#385B8B',
    fontSize: '9px',
    fontWeight: 'normal',
    backgroundColor: '#BEE8FF',
    padding: '0px 5px',
    borderRadius: '5px',
    height: '15px',
    width: '65px',
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  dateContainer: {
    fontFamily: 'Outfit',
    color: '#787878',
    fontSize: '9px',
    fontWeight: 'normal',
    textAlign: 'right',
  },
  rightAlignText: {
    fontFamily: 'Outfit',
    fontWeight: 'normal',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '3px 0px',
  },
  competencyHeading: {
    fontFamily: 'Outfit',
    color: '#272728',
    fontSize: '15px',
    fontWeight: 'semibold',
  },
  assessmentTypes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '15px',
  },
  svgContainer: {
    fontFamily: 'Outfit',
    fontWeight: 'normal',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
    color: '#65758C',
    fontSize: '9px',
  },

  level1: {
    fontFamily: 'Outfit',
    width: '53px',
    fontSize: '8px',
    color: '#2D2D2D',
    backgroundColor: '#7CE780',
    fontWeight: 'medium',
    padding: '3px 0px',
    textAlign: 'center',
    height: '18px',
    border: '1px solid #E1E1E1',
  },
  level2: {
    fontFamily: 'Outfit',
    width: '53px',
    fontSize: '8px',
    color: '#2D2D2D',
    backgroundColor: '#F8DA72',
    fontWeight: 'medium',
    padding: '3px 0px',
    textAlign: 'center',
    height: '18px',
    border: '1px solid #E1E1E1',
  },
  level3: {
    fontFamily: 'Outfit',
    width: '53px',
    fontSize: '8px',
    color: '#2D2D2D',
    backgroundColor: '#FF9F46',
    fontWeight: 'medium',
    padding: '3px 0px',
    textAlign: 'center',
    height: '18px',
    border: '1px solid #E1E1E1',
  },
  level4: {
    fontFamily: 'Outfit',
    width: '53px',
    fontSize: '8px',
    color: '#2D2D2D',
    backgroundColor: '#D8D8D8',
    fontWeight: 'medium',
    padding: '3px 0px',
    textAlign: 'center',
    height: '18px',
    border: '1px solid #E1E1E1',
  },
  pageNumber: {
    fontFamily: 'Outfit',
    fontWeight: 'medium',
    fontSize: '9px',
    color: 'gray',
    textAlign: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  mainCompetencyContainer: {
    marginTop: '15px',
  },
  surveyDate: {
    fontFamily: 'Outfit',
    fontWeight: 'normal',
    fontSize: '9px',
  },
  surveyDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameAndIdContainer: {
    flexDirection: 'row',
    gap: '10px',
  },
  nameKey: {
    fontFamily: 'Outfit',
    fontWeight: 'medium',
    flexDirection: 'row',
    fontSize: '11px',
    padding: '3px 0px',
  },
  nameText: {
    color: 'gray',
  },
  certificateContainer: {
    marginTop: '30px',
  },
});
