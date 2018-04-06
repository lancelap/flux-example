import { EventEmitter } from 'events';
import AppDispatcher from './../dispatcher';

class BasicStore extends EventEmitter {
  constructor(intialState = []) {
    super();
    this._items = {};
    intialState.forEach(this._addItem);
    this._registerDispatcher = (cb) => AppDispatcher.register(cb);
  }

  getAll() {
    return Object.keys(this._items).map(this.getById);
  }

  getById = (id) => this._items[id];

  _delete = (id) => {
    delete this._items[id]
  }

  _addItem = (item) => {
    this._items[item.id] = item
  }

  addChangeListener(cb) {
    this.on('STORE_CHANGE_EVENT', cb)
  }

  removeChangeListener(cb) {
    this.removeListener('STORE_CHANGE_EVENT', cb)
  }

  emmitChange() {
    this.emit('STORE_CHANGE_EVENT')
  }
}

export default BasicStore;