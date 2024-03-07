export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error();
    }
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error();
    }
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') {
      throw new Error();
    }
    this._code = newcode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
