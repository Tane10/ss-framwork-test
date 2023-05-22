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
    // this.router.get('/api/getScores', (req: Request, res: Response) =>
    //   this.getScoresController.getEntities<Score>(req, res)
    // );
    // this.router.get(
    //   '/users/:id',
    //   this.userController.getById.bind(this.userController)
    // );
    // this.router.post(
    //   '/users',
    //   this.userController.create.bind(this.userController)
    // );
    // this.router.put(
    //   '/users/:id',
    //   this.userController.update.bind(this.userController)
    // );
    // this.router.delete(
    //   '/users/:id',
    //   this.userController.delete.bind(this.userController)
    // );
  }
}
