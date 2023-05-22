import { BaseService } from '.';
import { Score } from '../models';

export class SubmitEntryService extends BaseService<Score> {
  // public getAll(): Score[] {
  //   return this.database.getAll<Score>();
  // }

  // public getById(id: number): User | undefined {
  //   return this.database.getUserById(id);
  // }

  public create(score: Score): Score {
    return this.database.create(score);
  }

  // public update(id: number, updatedUser: User): User | undefined {
  //   return this.database.updateUser(id, updatedUser.name);
  // }

  // public delete(id: number): User | undefined {
  //   return this.database.deleteUser(id);
  // }
}
