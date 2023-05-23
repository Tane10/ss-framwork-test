/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';
import seedData from './data/seedData.json';

export class Database<T> {
  private entities: Map<string, T>;

  constructor() {
    this.entities = new Map();

    if (process.env.STAGE === 'DEV') {
      this.seedData();
    }
  }

  public seedData(): void {
    seedData.forEach((entity) => {
      const id = uuidv4();
      const newEntity: any = { ...entity, id };
      this.entities.set(id, newEntity);
    });

    if (this.entities.size > 0) {
      console.log('Score data seeded');
    } else {
      console.log('Data seeding failed');
    }
  }

  public getAll(): T[] {
    return Array.from(this.entities.values());
  }

  public create(entity: any): T {
    const id = uuidv4();
    const newEntity = { ...entity, id };
    this.entities.set(id, newEntity);
    return newEntity;
  }
}
