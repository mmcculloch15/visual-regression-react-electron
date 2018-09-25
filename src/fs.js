const fs = require('fs')

export function deleteFile(filepath) {
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath)
  } else {
    alert("This file doesn't exist, cannot delete")
  }
}

//Overwrite the baseline with the latest image, and delete the diff to resolve the test
export function acceptNewBaseline(baseline, latest, diff) {
  fs.rename(latest, baseline, err => {
    if (err) throw err
  })
  deleteFile(diff)
}

export function getImagePaths() {
  const diff = glob.sync('./screenshots/diff/**/*.png')
  const baseline = glob.sync('./screenshots/baseline/**/*.png')
  const latest = glob.sync('./screenshots/latest/**/*.png')

  return { baseline, latest, diff }
}
