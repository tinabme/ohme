/**
  * Return Object Key or value based on key or value submitted
  *
  * functions: getKey() or getVal()
  *
  * @param  {Object} obj
  *    The Object you would like to search
  * @param  {string} str
  *    This is the string that is searched for in the object keys or objects values based on the function that is called
  *
  * @return will be the result of the search and may be a string, array, or object
  *
  * usage:
  * const myObj = {
  *   tina: '555-1212',
  *   sam:  '444-2525'
  *   tevo: '555-4040'
  * }
  *
  * ohme.getKey(myobj,'444-2525') // returns 'sam'
  * ohme.getVal(myobj, 'tevo') // return '555-4040'
**/

module.exports = {
  getKey: function (obj={}, str='') {
    return Object.keys(obj).find(key => obj[key] === str) || '';
  },
  getVal: function (obj={}, str='') {
    return obj[str] || '';
  }
};
