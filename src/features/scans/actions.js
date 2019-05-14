import { createScanData, createUserData } from '../../data'

export const CREATING_SCANS_DONE = 'CREATING_SCANS_DONE';
export const SORT_DATA_DONE = 'SORT_DATA_DONE';

export function getInitialData() {
    return (dispatch) => {
        dispatch({
            type: CREATING_SCANS_DONE,
            payload: { scans: createScanData(), users: createUserData() }
        });
    }
}

export function sortData(columnId) {
    return (dispatch) => {
        dispatch({
            type: SORT_DATA_DONE,
            payload: columnId
        });
    }
}