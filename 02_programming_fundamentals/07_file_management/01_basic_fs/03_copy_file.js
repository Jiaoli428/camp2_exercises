// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.

module.exports = copyPaste;

const path = "/Users/jiao/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/test_jiao.js";

const fs = require("fs");
function isAFile(path) {
  const stats = fs.lstatSync (path);
  return stats.isFile ();
}

function copyPaste(sourceFile, targetFile) {
  fs.readFile (sourceFile, (error, data) => {
    if (error) {
      console.warn(error);
    } else {
    fs.writeFile (targetFile, data, error => {
      if (error) {
        console.warn(error);
        return;
      }
    });
  };
  });
}
copyPaste();


// 1/ read sourceFile readFile;
// 2/ obtain content;
// 3/ write new file with content writeFile;
