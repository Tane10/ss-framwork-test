import { v4 as uuidv4 } from 'uuid';
import seedData from './seedData.json';

// In-memory Database
export class Database<T> {
  private entities: T[];

  constructor() {
    this.entities = [];

    if (process.env.STAGE === 'DEV') {
      this.seedData();
    }
  }

  public seedData(): void {
    this.entities.push(...(seedData as any));

    if (this.entities.length > 0) console.log('Score data seeded');
    else console.log('Data seeding failed');
  }

  public getAll(): T[] {
    return this.entities;
  }

  public getById(id: string): T | undefined {
    return this.entities.find((entity) => (entity as any).id === id);
  }

  public create(entity: T): T {
    const id = uuidv4();
    const newEntity = { ...entity, id };
    this.entities.push(newEntity);
    return newEntity;
  }

  public update(id: string, updatedEntity: T): T | undefined {
    const index = this.entities.findIndex(
      (entity) => (entity as any).id === id
    );
    if (index !== -1) {
      this.entities[index] = { ...updatedEntity, id };
      return this.entities[index];
    }
    return undefined;
  }

  public delete(id: string): T | undefined {
    const index = this.entities.findIndex(
      (entity) => (entity as any).id === id
    );
    if (index !== -1) {
      return this.entities.splice(index, 1)[0];
    }
    return undefined;
  }
}
