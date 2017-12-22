/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { IDBTransaction, IDBFactory, IDBDatabase } from 'shelving-mock-indexeddb';

Enzyme.configure({
  adapter: new Adapter(),
});
/* eslint-enable */

window.indexedDB = new IDBFactory();
