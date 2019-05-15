import React from 'react';
import { connect } from 'react-redux';
import ScanList from './ScanList';
import { getInitialData, sortData, addScan, editScan } from './actions';

class ScanContainer extends React.Component {
    constructor() {
        super();
        this.handleColumnSort = this.handleColumnSort.bind(this);
        this.handleScanAdd = this.handleScanAdd.bind(this);
        this.handleScanEdit = this.handleScanEdit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getInitialData());
    }

    handleColumnSort(columnId){
        this.props.dispatch(sortData(columnId));
    }

    handleScanAdd(scan){
        this.props.dispatch(addScan(scan));
    }

    handleScanEdit(scan) {
        this.props.dispatch(editScan(scan));
    }

    render() {
        const { scans, users, orderedAscending, orderedColumnId } = this.props;

        return (
            <ScanList
                scans={scans}
                users={users}
                onSortColumn={this.handleColumnSort}
                onAddScan={this.handleScanAdd}
                onEditScan={this.handleScanEdit}
                orderBy={orderedColumnId}
                orderedAscending={orderedAscending}
            />
        );
    }
}

const mapStateToProps = state => ({
    scans: state.scans.scans,
    users: state.scans.users,
    orderedColumnId: state.scans.orderedColumnId,
    orderedAscending: state.scans.orderedAscending
});

export default connect(mapStateToProps)(ScanContainer);
