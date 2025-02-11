import 'reflect-metadata';
import express from 'express';
import { Application, RequestHandler } from 'express';
import { Route } from './interfaces/Route.inerface';
import { AppInit } from './interfaces/AppInit.interface';
import connectDB from './config/mongoConfig';

class App {
  public app: Application;
  public port: number;
  constructor(appInit: AppInit) {
    this.app = express();
    this.port = appInit.port;

    this.initAssets();
    this.initMiddlewares(appInit.middlewares);
    this.initRoutes(appInit.routes);
  }
  private initMiddlewares(middlewares: RequestHandler[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }
  private initRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use(`/api${route.path}`, route.router);
    });
  }
  private initAssets() {
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
  public async listen() {
    await connectDB();
    return this.app.listen(this.port, () => {
      console.log(`App listening  on the http://localhost:${this.port}`);
    });
  }
}

export default App;
