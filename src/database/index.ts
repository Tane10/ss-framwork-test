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

  // public getById(id: string): T | undefined {
  //   return this.entities.get(id);
  // }

  public create(entity: any): T {
    const id = uuidv4();
    const newEntity = { ...entity, id };
    this.entities.set(id, newEntity);
    return newEntity;
  }

  // public update(id: string, updatedEntity: T): T | undefined {
  //   if (this.entities.has(id)) {
  //     const updated = { ...updatedEntity, id };
  //     this.entities.set(id, updated);
  //     return updated;
  //   }
  //   return undefined;
  // }

  // public delete(id: string): T | undefined {
  //   if (this.entities.has(id)) {
  //     const deleted = this.entities.get(id);
  //     this.entities.delete(id);
  //     return deleted;
  //   }
  //   return undefined;
  // }
}
