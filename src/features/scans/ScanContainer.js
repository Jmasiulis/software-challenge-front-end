import React from 'react';
import { connect } from 'react-redux';
import ScanList from './ScanList';
import { getInitialData } from './actions';

class ScanContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(getInitialData());
    }

    render() {
        return (
            <div>
                <ScanList
                    scans={this.props.scans}
                    users={this.props.users}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.scans.users,
    scans: state.scans.scans,
  });

export default connect(mapStateToProps)(ScanContainer);
