// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
//
module.exports = isAFile;


const fs = require("fs");

function isAFile(path) {
  const stats = fs.lstatSync (path);
  return stats.isFile ();
}
// isAFile(path);

function deleteFile () {
  fs.unlink (path, error => {
    if (error) {
      console.warn(error);
      return;
    }
    console.log("File deleted!");
  });
}

const path = "/Users/jiao/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/test_jiao.js";

deleteFile();
