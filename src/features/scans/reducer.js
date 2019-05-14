import update from 'immutability-helper';
import {
  CREATING_USERS_DONE,
  CREATING_SCANS_DONE
} from './actions';


const initialState = {
  users: null,
  scans: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case CREATING_USERS_DONE:
      return update(state, {
        users: { $set: payload }
      });

      case CREATING_SCANS_DONE:
        return update(state, {
          scans: { $set: payload }
        });

    default:
      return state;
  }
}