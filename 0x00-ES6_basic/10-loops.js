export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    const value = appendString + item;
    array.push(value);
  }

  return array;
}
