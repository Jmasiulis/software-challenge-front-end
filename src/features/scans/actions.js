import { createScanData, createUserData } from '../../data'

export const CREATING_USERS_DONE = 'CREATING_USERS_DONE';
export const CREATING_SCANS_DONE = 'CREATING_SCANS_DONE';

export function getInitialData() {
  return (dispatch) => {
    dispatch({
      type: CREATING_USERS_DONE,
      payload: createUserData()
    });

    dispatch({
      type: CREATING_SCANS_DONE,
      payload: createScanData()
    });
  }
}