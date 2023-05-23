import { Database } from '../database';

export abstract class BaseService<T> {
  protected readonly database: Database<T>;

  constructor(database: Database<T>) {
    this.database = database;
  }
}
