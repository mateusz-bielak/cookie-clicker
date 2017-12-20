# Cookie Clicker - demo version of *Orteil Dashnet* game

https://butseriously.github.io/cookie-clicker - click to see live.

http://orteil.dashnet.org/cookieclicker - click to see original game.

### Usage

Run application in your browser:
```
npm run dev-server
```

You can also prepare development and production build in the public folder:
```
npm run build:dev - for development build
npm run build:prod - for production build
npm run serve
```

If you want to add a new building (producent), just edit the *building.js* file in src/settings folder.
You have to provide a new object in an array with the following parameters:
```
name - set a name for your building,
description - write a short description,
initialCost - set an initial cost in cookies,
productionPerSecond - set production power for single building,
```

### Beta version

This is a beta version of application, deployed for preliminary feedback.
The final version will include tests for indexedDB, a reset-your-progress button and general code refactor.