export default class HolbertonCourse {
  constructor(name, length, array) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(array)) {
      throw new TypeError('the array must consist of strings');
    }
    this._name = String(name);
    this._length = Number(length);
    this._array = array;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this.length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get array() {
    return this._array;
  }

  set array(newArray) {
    if (!Array.isArray(newArray)) {
      throw new TypeError('the array must consist of strings');
    }
    this._array = newArray;
  }
}
