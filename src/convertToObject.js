'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const objKeys = [];
  const objValues = [];
  const splittedSource = sourceString.split(';');
  const styleObj = {};

  splittedSource.forEach(element => {
    for (const i in element) {
      if (element[i] === ':') {
        objKeys.push(element.slice(0, i).trim());
        objValues.push(element.slice(parseInt(i) + 1).trim());
      }
    }
  });

  for (const el in objKeys) {
    styleObj[objKeys[el]] = `${objValues[el]}`;
  }

  return styleObj;
}

module.exports = convertToObject;
