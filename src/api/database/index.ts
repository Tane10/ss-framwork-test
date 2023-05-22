import { v4 as uuidv4 } from 'uuid';

// In-memory Database
export class Database<T> {
  private entities: T[];

  constructor() {
    this.entities = [];
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
