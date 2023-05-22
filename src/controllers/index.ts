import { BaseService } from 'services';
import { Request, Response } from 'express';

export abstract class BaseController<T> {
  protected readonly service: BaseService<T>;

  constructor(service: BaseService<T>) {
    this.service = service;
  }

  // public abstract getEntity<T>(req: Request, res: Response): T;

  // public abstract getEntities<T>(req: Request, res: Response): T;

  // public abstract getEntityById(req: Request, res: Response): void;

  // public abstract createEntity(req: Request, res: Response): void;

  // public abstract updateEntity(req: Request, res: Response): void;

  // public abstract deleteEntity(req: Request, res: Response): void;
}
