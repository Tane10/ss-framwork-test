import { BaseService } from '.';
import { Score } from '../models';

export class GetScoresService extends BaseService<Score> {
  public getAll(): Score[] {
    return this.database.getAll();
  }
}
