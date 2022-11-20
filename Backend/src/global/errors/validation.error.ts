import CustomError from './custom.error';

export default class validation extends CustomError {
  statusCode = 401;

  constructor(message?: string, private fields?: string[]) {
    super(message ? message : 'validation error');
    Object.setPrototypeOf(this, validation.prototype);
  }

  serializeErrors() {
    return [{ message: this.message, fields: this.fields?.sort() }];
  }
}
