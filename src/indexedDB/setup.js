import { getFromDatabase, updateDatabase } from './methods';

let database;
const databaseName = 'cookie-game-database';
const databaseVersion = 1;
const databaseStoreName = 'user-data';

// indexedDB.deleteDatabase(databaseName);

const openDatabase = indexedDB.open(databaseName, databaseVersion);

openDatabase.onupgradeneeded = () => {
  const databaseToUpgrade = openDatabase.result;
  databaseToUpgrade.createObjectStore(databaseStoreName);
};

openDatabase.onsuccess = (event) => {
  database = event.target.result;
};

setInterval(() => {
  const cookiesAmount = document
    .querySelector('.cookie_panel__stats>p')
    .textContent
    .split(' ')[0];

  updateDatabase(database, 'cookiesAmount', cookiesAmount);
}, 30000);

export default databaseStoreName;
