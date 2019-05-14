import update from 'immutability-helper';
import {
	CREATING_SCANS_DONE,
	SORT_DATA_DONE
} from './actions';

const initialState = {
	scans: null,
	orderedColumnId: null,
	orderedAscending: true
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
      	case CREATING_SCANS_DONE:
			return update(state, {
				scans: { $set: formInitialData(payload) }
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