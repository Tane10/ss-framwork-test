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
  }
}
