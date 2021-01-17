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
  const styleObj = {};
  const splittedSource = sourceString.split(';')
    .filter(element => element.length > 4)
    .map(string => string.split(':'));

  for (const el in splittedSource) {
    const [key, value] = splittedSource[el];

    styleObj[key.trim()] = value.trim();
  }

  return styleObj;
}
module.exports = convertToObject;
