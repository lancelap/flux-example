import BasicStore from './BasicStore';
import { DELETE_ARTICLE } from './../constants';

class ArticlesStore extends BasicStore {
  constructor(...rest) {
    super(...rest);
    
    this._registerDispatcher((action) => {
      const {type, payload} = action;

      switch (type) {
        case DELETE_ARTICLE: 
          delete this._items[payload.id]
          
          break
        default: return;
      }

      this.emmitChange();
    })
  }
}

export default ArticlesStore;