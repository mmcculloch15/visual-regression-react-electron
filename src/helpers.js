export function extractTestDataFromPath(path) {
  const splitPath = path.split('/')
  const splitTestDetails = splitPath[5].split('_')
  return {
    component: splitPath[3],
    breakpoint: splitPath[4],
    fileName: splitPath[5],
    browser: splitTestDetails[1],
    title: splitTestDetails[0],
  }
}
