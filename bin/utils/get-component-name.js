/**
 * @function getComponentName
 * @description Get the name of the component
 * @param {string} name - name of component.
 * @example getComponentName("component-name");
 * @returns {string} "ComponentName"
 * @author [omdxp](https://github.com/omdxp)
 */
exports.getComponentName = (name) => {
  let component = name.charAt(0).toUpperCase() + name.slice(1);
  if (name.includes("-")) {
    component = "";
    let words = name.split("-");
    words.forEach((w) => {
      component += w.charAt(0).toUpperCase() + w.slice(1);
    });
  }
  return component;
};
