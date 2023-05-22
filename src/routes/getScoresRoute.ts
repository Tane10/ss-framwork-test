import { BaseRoute } from '.';
import { GetScoresController } from '../controllers/getScoresController';
import { Request, Response } from 'express';
import { Score } from '../models';

export class GetScoresRoute extends BaseRoute<Score> {
  protected readonly getScoresController: GetScoresController;

  constructor(getScoresController: GetScoresController) {
    super(getScoresController);
    this.getScoresController = getScoresController;
  }

  protected configureRoutes(): void {
    this.router.get('/api/getScores', (req: Request, res: Response) =>
      this.getScoresController.getEntities(req, res)
    );
  }
}
