import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScanList from './ScanList';
import {
  getInitialData, sortData, addScan, editScan
} from './actions';

class ScanContainer extends React.Component {
  constructor() {
    super();
    this.handleColumnSort = this.handleColumnSort.bind(this);
    this.handleScanAdd = this.handleScanAdd.bind(this);
    this.handleScanEdit = this.handleScanEdit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialData());
  }

  handleColumnSort(columnId) {
    const { dispatch } = this.props;
    dispatch(sortData(columnId));
  }

  handleScanAdd(newItemId) {
    const { dispatch } = this.props;
    dispatch(addScan(newItemId));
  }

  handleScanEdit(scan) {
    const { dispatch, orderedColumnId } = this.props;
    dispatch(editScan(scan, orderedColumnId));
  }

  render() {
    const {
      scans, users, orderedAscending, orderedColumnId
    } = this.props;

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

ScanContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      elevationMin: PropTypes.number,
      elevationMax: PropTypes.number,
      username: PropTypes.string,
      name: PropTypes.string
    })
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  orderedAscending: PropTypes.bool.isRequired,
  orderedColumnId: PropTypes.string,
};

ScanContainer.defaultProps = {
  scans: null,
  users: null,
  orderedColumnId: null
};

const mapStateToProps = state => ({
  scans: state.scans.scans,
  users: state.scans.users,
  orderedColumnId: state.scans.orderedColumnId,
  orderedAscending: state.scans.orderedAscending
});

export default connect(mapStateToProps)(ScanContainer);
