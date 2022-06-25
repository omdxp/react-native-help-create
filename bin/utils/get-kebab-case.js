/**
 * @function getKebabCase
 * @description Get the kebab case of the string
 * @param {string} string - string to convert.
 * @example getKebabCase("CompOne");
 * @returns {string} "comp-one"
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.getKebabCase = (string) => {
  if (
    !/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g.test(
      string
    )
  ) {
    return string.toLowerCase();
  }
  return string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join("-")
    .toLowerCase();
};
