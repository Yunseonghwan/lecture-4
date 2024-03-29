import photosReducer from './photos';
import categoryReducer from './category';
import imageModalReducer from './imageModal';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  photos: photosReducer,
  category: categoryReducer,
  imageModal: imageModalReducer,
});

export default rootReducer;
