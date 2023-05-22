import { BaseController } from '.';
import { Score } from '../models';
import { GetScoresService } from '../services/getScoresService';
import { Request, Response } from 'express';

export class GetScoresController extends BaseController<Score> {
  protected service: GetScoresService;

  constructor(service: GetScoresService) {
    super(service);
    this.service = service;
  }

  public getEntities(req: Request, res: Response): Score[] {
    const scores = this.service.getAll();
    res.json(scores);
    return scores;
  }
}
