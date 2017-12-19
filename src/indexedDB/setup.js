import { updateDatabase } from './methods';

let database;
export const databaseName = 'cookie-game-database';
export const databaseVersion = 1;
export const databaseStoreName = 'user-data';

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

  const buildingsAmount = [].slice.call(document
    .querySelectorAll('.store_panel__building'));

  const buildingData = buildingsAmount.map((building) => {
    const buildingName = building
      .querySelector('.store_panel__building_name')
      .textContent;

    const buildingAmount = building
      .querySelector('.store_panel__building_amount')
      .textContent;

    return { buildingName, buildingAmount };
  });

  buildingData.forEach((building) => {
    const { buildingName, buildingAmount } = building;
    updateDatabase(database, buildingName, buildingAmount);
  });

  updateDatabase(database, 'cookiesAmount', cookiesAmount);
}, 30000);
