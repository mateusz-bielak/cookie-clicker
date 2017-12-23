# Cookie Clicker - demo version of *Orteil Dashnet* game

https://butseriously.github.io/cookie-clicker - click to see live.

http://orteil.dashnet.org/cookieclicker - click to see original game.

### Usage

Run application in your browser:
```
npm run dev-server - runs app in your browser
npm test - for start tests
npm test -- --watch - for start tests in watch mode
```

You can also prepare development and production build in the public folder:
```
npm run build:dev - for development build
npm run build:prod - for production build
```

If you want to add a new building (producent), just edit the *building.js* file in src/settings folder.
You have to provide a new object in an array with the following parameters:
```
name - set a name for your building,
description - write a short description,
initialCost - set an initial cost in cookies,
productionPerSecond - set production power for single building,
```

You can reset the database by run in the browser console:
```
indexedDB.deleteDatabase('cookie-game-database');
```

### About project

#### Tests
Tests are only covering components. There aren't any tests for the indexedDB. I'm going to update project with those tests in the future.

#### Redux
I decided to not include Redux.js library for this project. In my opinion, it would be over-engineering. Data flow between components aren't so complicated to use third-party library for stage management.

