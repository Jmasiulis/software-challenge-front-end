import update from 'immutability-helper';
import uuidv4 from 'uuid/v4';
import {
	CREATING_SCANS_DONE,
	SORT_DATA_DONE,
	ADD_SCAN_DONE,
	EDIT_SCAN_DONE
} from './actions';

const initialState = {
	scans: null,
	users: null,
	orderedColumnId: null,
	orderedAscending: true
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
      	case CREATING_SCANS_DONE:
			return update(state, {
				scans: { $set: formInitialData(payload) },
				users: { $set: payload.users }
			});
		
		case SORT_DATA_DONE:
			if (state.orderedColumnId === payload) {
				return update(state, {
					orderedAscending: { $set: !state.orderedAscending },
					scans: { $set: sortData(state.scans, state.orderedColumnId, !state.orderedAscending) }
				});
			}

			return update(state, {
				orderedColumnId: { $set: payload },
				scans: { $set: sortData(state.scans, payload, true) },
				orderedAscending: { $set: true }
			});

		case ADD_SCAN_DONE:
			return update(state, {
				scans: { $push: [{id: payload}] },
				orderedColumnId: { $set: null }
			});

		case EDIT_SCAN_DONE:
			return update(state, {
				scans: { $apply: b => b.map((item, ii) => {
					if(item.id !== payload.id) return item;
					return payload;
				}) },
				orderedColumnId: { $set: null }
			});

    	default:
      		return state;
  	}
}

function formInitialData({scans, users}) {
	var groupedUsers = users.reduce((result, item) => {
		if (!result[item.id]) {
			result[item.id] = {};
		}

		result[item.id] = item;

        return result;
	}, {});
	
	return scans.map(item => {
		item.username = groupedUsers[item.scannedByUserId] && groupedUsers[item.scannedByUserId].name;
		item.id = uuidv4();

		return item;
	})
}

function sortData(data, columnId, orderedAscending) {
	return data.sort((value1, value2) => {
		const firstValue = getValueForSort(value1[columnId]);
		const secondValue = getValueForSort(value2[columnId]);

		if (firstValue> secondValue) {
			return orderedAscending ? 1 : -1;
		}

		if (firstValue < secondValue) {
			return orderedAscending ? -1 : 1;
		}

		return 0;
	});
}

function getValueForSort(value) {
	return typeof(value) === 'string' ? value.toLowerCase() : value;
}