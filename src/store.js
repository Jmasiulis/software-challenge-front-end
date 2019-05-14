import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import scansReducer from './features/scans/reducer';

const reducers = combineReducers({
  scans: scansReducer,
});

export default createStore(
  reducers,
  applyMiddleware(thunk)
);
