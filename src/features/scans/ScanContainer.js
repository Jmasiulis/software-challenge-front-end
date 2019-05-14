import React from 'react';
import { connect } from 'react-redux';
import ScanList from './ScanList';
import { getInitialData, sortData } from './actions';

class ScanContainer extends React.Component {
    constructor() {
        super();
        this.handleColumnSort = this.handleColumnSort.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getInitialData());
    }

    handleColumnSort(columnId, what){
        console.log(this, columnId);
        this.props.dispatch(sortData(columnId));
    }

    render() {
        const { scans, orderedAscending, orderedColumnId } = this.props;
        return (
            <ScanList
                scans={scans}
                onSortColumn={this.handleColumnSort}
                orderBy={orderedColumnId}
                orderedAscending={orderedAscending}
            />
        );
    }
}

const mapStateToProps = state => ({
    scans: state.scans.scans,
    orderedColumnId: state.scans.orderedColumnId,
    orderedAscending: state.scans.orderedAscending
});

export default connect(mapStateToProps)(ScanContainer);
