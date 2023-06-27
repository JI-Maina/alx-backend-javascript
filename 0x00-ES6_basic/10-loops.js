export default function appendToEachArrayValue(array, appendString) {
  let key = 0;
  for (const element of array) {
    // eslint-disable-next-line no-param-reassign
    array[key] = appendString + element;
    key += 1;
  }

  return array;
}
