import { databaseStoreName } from './setup';

export const getFromDatabase = (database, key) => {
  const transaction = database
    .transaction(databaseStoreName);
  const store = transaction.objectStore(databaseStoreName);
  const request = store.get(key);

  return request;
};

export const updateDatabase = (database, key, value) => {
  const transaction = database
    .transaction(databaseStoreName, 'readwrite');
  const store = transaction.objectStore(databaseStoreName);
  const request = store.get(key);

  request.onsuccess = (event) => {
    let data = event.target.result;
    data = value;

    store.put(data, key);
  };
};
