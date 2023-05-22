// app.post('/api/submitEntry', (req, res) => {
// 	throw new Error('not implemented');
// });
import { BaseController } from '.';
import { SubmitEntryService } from '../services/submitEntryService';
import { Score } from '../models/index';

export class SubmitEntryController extends BaseController<Score> {
  protected service: SubmitEntryService;

  constructor(service: SubmitEntryService) {
    super(service);
    this.service = service;
  }

  //   public createEntity<Array<Score>>(req: Request, res: Response): Score[] {
  //     const scores = this.service.getAll();
  //     return scores
  //   }
}
