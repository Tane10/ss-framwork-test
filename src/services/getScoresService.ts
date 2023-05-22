import { BaseService } from '.';
import { Score } from '../models';

export class GetScoresService extends BaseService<Score> {
  public getAll(): Score[] {
    return this.database.getAll();
  }

  // public getById(id: number): User | undefined {
  //   return this.database.getUserById(id);
  // }

  // public create(user: User): User {
  //   return this.database.createUser(user.name);
  // }

  // public update(id: number, updatedUser: User): User | undefined {
  //   return this.database.updateUser(id, updatedUser.name);
  // }

  // public delete(id: number): User | undefined {
  //   return this.database.deleteUser(id);
  // }
}
