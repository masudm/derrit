const screenXsMin = 480
const screenSmMin = 768
const screenMdMin = 992
const screenLgMin = 1400
const lgGridMargin = 50
const screenLgWidth = screenLgMin - 2 * lgGridMargin

export default {
  screenXsMin: screenXsMin,
  screenSmMin: screenSmMin,
  screenMdMin: screenMdMin,
  screenLgMin: screenLgMin,
  screenXsMax: screenSmMin - 1,
  screenSmMax: screenMdMin - 1,
  screenMdMax: screenLgMin - 1,
  screenLgWidth: screenLgWidth,
  xsGridMargin: 10,
  smGridMargin: 20,
  mdGridMargin: 30,
  lgGridMargin: lgGridMargin,
  sansFontFamily: 'Source Sans Pro, sans-serif',
  serifFontFamily: 'Raleway, serif',
}
