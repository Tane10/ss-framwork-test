import { Request, Response } from 'express';
import { BaseRoute } from '.';
import { SubmitEntryController } from '../controllers/submitEntryController';
import { Score } from '../models';

export class SubmitEntryRoute extends BaseRoute<Score> {
  protected readonly submitEntryController: SubmitEntryController;

  constructor(submitEntryController: SubmitEntryController) {
    super(submitEntryController);
    this.submitEntryController = submitEntryController;
  }

  protected configureRoutes(): void {
    // this.router.post('/api/submitEntry', (req: Request, res: Response) =>
    //   this.submitEntryController.create(req, res)
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
