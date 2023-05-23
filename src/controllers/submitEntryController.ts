import { BaseController } from '.';
import { SubmitEntryService } from '../services/submitEntryService';
import { Score } from '../models/index';
import { Request, Response } from 'express';
import { ErrorMessage } from '../errors';
import { CustomError, ScoreRequestBody, ValidatedRequest } from '../types';
import { validateWord } from '../util/wordLookUp';

export class SubmitEntryController extends BaseController<Score> {
  protected service: SubmitEntryService;

  constructor(service: SubmitEntryService) {
    super(service);
    this.service = service;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private validateRequestBody(body: any): ValidatedRequest {
    const error = new ErrorMessage();

    const expectedKeys = ['name', 'word'];
    const result = { valid: false, value: null };

    // Check if the request body contains only the expected keys
    const hasExpectedKeys = Object.keys(body).every((key) =>
      expectedKeys.includes(key)
    );

    if (!hasExpectedKeys) {
      return {
        ...result,
        value: error.invalidRequest('Request contains unexpected keys'),
      };
    }

    // Check if the values for the keys are not false
    const { name, word } = body;
    const areValuesValid = name && word && validateWord(word);

    if (areValuesValid) {
      return { valid: true, value: { name, word } };
    } else {
      return {
        ...result,
        value: error.invalidRequest('Request body contains incorrect values'),
      };
    }
  }

  public createEntity(req: Request, res: Response): void {
    if (req.body) {
      const { body } = req;

      const { valid, value } = this.validateRequestBody(body);

      if (valid) {
        const addedScore = this.service.createScoreEntry(
          value as ScoreRequestBody
        );

        res.json(addedScore);
      } else {
        const errorRes = value as CustomError;

        console.log(errorRes.error.message);
        res.status(errorRes.status).json(errorRes.error.message);
      }
    }
  }
}
