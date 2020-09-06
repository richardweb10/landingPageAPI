const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const { UserService, AuthService, CompanyService } = require("../services");

// controllers
const {
  UserController,
  AuthController,
  CompanyController,
} = require("../controllers");

// routes
const {
  UserRoutes,
  AuthRoutes,
  CompanyRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User, Company } = require("../models");

// repositories
const { UserRepository, CompanyRepository } = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    CompanyService: asClass(CompanyService).singleton(),
  })
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CompanyController: asClass(
      CompanyController.bind(CompanyController)
    ).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CompanyRoutes: asFunction(CompanyRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Company: asValue(Company),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CompanyRepository: asClass(CompanyRepository).singleton(),
  });

module.exports = container;
