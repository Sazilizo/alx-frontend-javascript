export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    } else if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](castType) {
    if (castType === 'number') {
      return this._size;
    }
    return this._location;
  }
}
