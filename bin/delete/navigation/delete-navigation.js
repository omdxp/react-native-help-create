const fs = require("file-system");

/**
 * @function deleteNavigation
 * @description this function is used to delete navigation file that exists.
 * @param {string} folder - folder path that contains the navigation file.
 */
exports.deleteNavigation = (folder) => {
  const path = folder === "" ? "src/screens/" : `src/screens/${folder}/`;
  if (fs.existsSync(`${path}navigation.tsx`)) {
    fs.unlink(`${path}navigation.tsx`, (err) => {
      if (err) {
        console.log(`Unable to delete ${path}navigation.tsx`);
      } else {
        console.log(`${path}navigation.tsx deleted`);
      }
    });
  } else if (fs.existsSync(`${path}navigation.jsx`)) {
    fs.unlink(`${path}navigation.jsx`, (err) => {
      if (err) {
        console.log(`Unable to delete ${path}navigation.jsx`);
      } else {
        console.log(`${path}navigation.jsx deleted`);
      }
    });
  } else {
    console.log(`It seems there is no navigation file in ${path}`);
  }
};
