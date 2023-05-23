import { CustomError } from './types';

export class ErrorMessage {
  public invalidRequest(message: string, status = 400): CustomError {
    const error = new Error(message);
    return { status, error };
  }
}
