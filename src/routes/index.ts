import { Router } from 'express';
import { BaseController } from '../controllers';

export abstract class BaseRoute<T> {
  protected readonly router: Router;
  protected controller: BaseController<T>;

  public getRouter(): Router {
    return this.router;
  }

  constructor(controller: BaseController<T>) {
    this.router = Router();
    this.controller = controller;
    this.configureRoutes();
  }

  protected abstract configureRoutes(): void;
}
