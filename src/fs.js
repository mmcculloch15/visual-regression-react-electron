const fs = require('fs')

export function deleteFile(filepath) {
  fs.exists(filepath, function(exists) {
    if (exists) {
      // File exists deletings
      fs.unlink(filepath, function(err) {
        if (err) {
          alert('An error ocurred updating the file' + err.message)
          console.log(err)
          return
        }
      })
    } else {
      alert("This file doesn't exist, cannot delete")
    }
  })
}

//Overwrite the baseline with the latest image, and delete the diff to resolve the test
export function acceptNewBaseline(baseline, latest, diff) {
  fs.rename(latest, baseline, err => {
    if (err) throw err
  })
  deleteFile(diff)
}
