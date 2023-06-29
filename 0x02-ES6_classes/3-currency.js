export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }

    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
