export default function appendToEachArrayValue(array, appendString) {
    for (let item of array) {
      let value = appendString + item;
      array.push(value)
    }
  
    return array;
  }