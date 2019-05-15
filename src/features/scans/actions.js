import { createScanData, createUserData } from '../../data'

export const CREATING_SCANS_DONE = 'CREATING_SCANS_DONE';
export const SORT_DATA_DONE = 'SORT_DATA_DONE';
export const ADD_SCAN_DONE = 'ADD_SCAN_DONE';
export const EDIT_SCAN_DONE = 'EDIT_SCAN_DONE';

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

export function addScan(newItemId) {
    return (dispatch) => {
        dispatch({
            type: ADD_SCAN_DONE,
            payload: newItemId
        });
    }
}

export function editScan(scan) {
    return (dispatch) => {
        dispatch({
            type: EDIT_SCAN_DONE,
            payload: scan
        });
    }
}