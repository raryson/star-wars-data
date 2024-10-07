# Star Wars SPA

## Context
This application run with React and Typescript and use a lot of some libraries, like:
- Styled Components
- React Router
- React Testing Library

This application don't have a global state like a reducer. Aim to be simple and not work with a complex store manipulation. This is can be a improvment for the future.

## How run locally?

### Docker
You can run with docker. Just need to build and run the application.
Here the commands to help:

**Build**
```
docker build -t star-wars .
```
**Run**
```
docker run -p 3000:3000 star-wars
```
The app will be exposed on port 3000. To access you should access http://localhost:3000 after run.

### Manually
Also you can run application manually. Just need to run `npm install` and `npm run dev`. This will start the development env.


### About unit tests
This application use the React Testing Library, that guarante that we can create tests focused in how the component is showed for the user.
To run the tests locally just run:
```
npm run tests
```

### Code Formatter
This project have configured the Eslint with the Typescript config. Also have a Prettier config to enhance the formater.
Some helpfull commands that can help to fix you project is `npm run lint` and `npm run format`. `lint` to see if something have break the pattern and `format` to fix using prettier config.