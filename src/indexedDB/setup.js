const databaseName = 'cookie-game-database';
const databaseVersion = 1;
const databaseStoreName = 'user-data';

const openDatabase = indexedDB.open(databaseName, databaseVersion);

openDatabase.onupgradeneeded = () => {
  const database = openDatabase.result;
  database.createObjectStore(databaseStoreName, { autoIncrement: true });
};
