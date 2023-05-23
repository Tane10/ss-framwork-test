/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import { Database } from './database';
import { GetScoresService } from './services/getScoresService';
import { BaseRoute } from './routes';
import { BaseController } from './controllers';
import { BaseService } from './services';
import { GetScoresRoute } from './routes/getScoresRoute';
import { GetScoresController } from './controllers/getScoresController';
import { SubmitEntryRoute } from './routes/submitEntryRoute';
import { SubmitEntryController } from './controllers/submitEntryController';
import { SubmitEntryService } from './services/submitEntryService';
import path from 'path';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

class App {
  private readonly app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initialiseMiddleware();
    this.initialiseRoutes();
  }

  private initialiseMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  private initialiseRoutes(): void {
    // Root route
    this.app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });

    const dataBase = new Database();

    const getScoresRoute = this.createRoute(
      GetScoresRoute,
      GetScoresController,
      GetScoresService,
      dataBase
    );

    const submitEntryRoute = this.createRoute(
      SubmitEntryRoute,
      SubmitEntryController,
      SubmitEntryService,
      dataBase
    );

    this.app.use(getScoresRoute.getRouter());
    this.app.use(submitEntryRoute.getRouter());

    this.app.use((err: Error, req: express.Request, res: express.Response) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
  }

  private createRoute<
    Route extends BaseRoute<T>,
    Controller extends BaseController<T>,
    Service extends BaseService<T>,
    T
  >(
    Route: new (controller: Controller) => Route,
    Controller: new (service: Service) => Controller,
    Service: new (database: Database<any>) => Service,
    database: Database<any>
  ): Route {
    const service = new Service(database);
    const controller = new Controller(service);
    const route = new Route(controller);
    return route;
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = new App(port);
app.listen();
