## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

### Nestjs notes

- modules consists of providers, controllers, imports and exports
- providers in nestjs are classes that acts as services, factories and repositories
- controllers serve the function of handling http requests and sending responses back to the client.
- to simplify backend development using modern architecture
- provides a structured way to build scalable and testable applications
- solves the limitations of traditional express apps.
- business logic and calculations in service files and controllers calls the methods from these services files.

#### Controllers

- organize api endpoints clearly and modularity
- help separate concerns: routing vs business logic
- make code scalable and maintainable
- improve code readability with clean structure.
- to create controller - nest g controller controllerName

#### Decorators

- gives additional behaviour to method, class, paramaters
- special functions that add metadata to classes or methods

#### Services

- a ts class with logic like calculations, data access etc.
- used to write business logic in a clean and reusable way.
- they are marked with @Injectable so nestjs can use them.
- inject services into controllers using contructor injection
- services are a part of dependency injection system.
- to generate service - nest generate service product ( generate can be used as g and service can be used as s)

#### Modules

- a container where we keep related controllers, services and providers for our application
- core part of nestjs architecture
- every nestjs app has atleast one module.
- organizes the app into features
- to create module - nest generate module employee

#### Features

- nestjs architecture is modular, scalable and maintainable
- this pattern helps in writing reusable and well-structured code

#### Providers

- any class that can be injected and reused ( like service, custom classes , etc )
- registered in the module to be used via dependency injection

#### Dependency Injection

- nestjs automatically provides services where they are needed.
- you don't create new instances manually
- improves testability and reusability.
- it makes testing easier
- it promotes loose coupling ( classes don't tightly depend on each other )
- it improves readability and maintainability

#### API

- Application Programming interface
- it allows two application to talk to each other
- acts as a bridge between frontend and backend

#### REST

- Representation State Transfer
- simple, scalable and stateless communication

#### DTO ( Data transfer object )

- dto files helps for compile time type checking not runtime type checking
- so from frontend whatever data is sent is not checked if we use dto or not.

#### for frontend type checking we use two packages

- class-validator and class-transformer
- class transformer converts the json data to objects and class validator validates that objects.

#### Pipes

- pipes are used to transform or validate incoming data
- nestjs allows you to create your own custom pipes
- they can be used for custom validatoin, data transformation, or business logic filtering.
- it runs before the data hits the route handler ( controller method )
- you can apply pipes at method level, controller level or globally
- custom pipes implement the PipeTransform Interface.
- nest g pipe common/pipes/uppercase

#### Protecting routes

- it means restricting access to specific api routes.
- only authorized users ( like logged-in users or admins ) can access them.
- this is done using Guards

#### Guards

- they are classes that implement logic to decide whether a request is allowed or not.
- the implement the CanActivate interface and run before the route handler
- mostly used for authentication ( user is logged in or not ) and authorization ( what features is the user allowed to do kind of role based system ) .
- to avoid duplicating checks in every controller
- nest g guard guards/auth

#### Exception filters

- handle errors and exceptions in a centralized way
- help in managing app-wide error handling logic cleanly and consistently
- filters can be applied at method-level, controller-level or globally ( main.ts )
- @Catch() decorator is used to define which exception the filter will handle
- they can be generated using : nest g filter filters/http-exception

#### Middleware

- middleware runs before the request reaches the controller.
- logging incoming requests
- authentication tokens ( eg. checking JWT )
- request transformation ( eg. converting strings to numbers )
- blocking or redirecting requests
- setting headers
- nest g middleware middleware/logger

#### middleware vs guard

- guard
  - before route is accessed ( based on auth )
  - authorization ( role check, access allowed? )
- middleware
  - can't use the concepts of nestjs like role base authorization etc.

#### lifecycle events

- special methods / hooks provided by nestjs
- automatically called at different stages of a module/service/component's life.
- used to perform actions during creation or destruction.
- helps run some code when app/module/service is initialized.
- helps run cleanup code when app/module/service is destroyed
- useful for tasks like DB connections, logging, resource cleanup, etc.
- onModuleInit() - called when the module is initialized
- onModuleDestroy() - called before the module is destroyed.
- afterModuleInit() (optional) - called after all modules are initialized
- onApplicationBootstrap() -> when app is fully bootstrapped
- onApplicationShutdown() -> called when app is shutting down.

#### Environment variables

- @nestjs/config package is used for that
