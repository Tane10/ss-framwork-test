import { Database } from '../database';

export abstract class BaseService<T> {
  protected readonly database: Database<T>;

  constructor(database: Database<T>) {
    this.database = database;
  }

  // public abstract getAll(): T[];

  // public abstract getById(id: number): T | undefined;

  // public abstract create(item: T): T;

  // public abstract update(id: number, item: T): T | undefined;

  // public abstract delete(id: number): T | undefined;
}
