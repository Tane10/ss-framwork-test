import { BaseController } from '.';
import { Score } from '../models';
import { GetScoresService } from '../services/getScoresService';

export class GetScoresController extends BaseController<Score> {
  protected service: GetScoresService;

  constructor(service: GetScoresService) {
    super(service);
    this.service = service;
  }

  //   public getEntities<Array<Score>>(req: Request, res: Response): Score[] {
  //     const scores = this.service.getAll();
  //     return scores
  //   }
}
