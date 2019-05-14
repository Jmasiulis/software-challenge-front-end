import React from 'react';
import './ScanList.css'


class ScanList extends React.Component {

    render() {
        const { scans, users } = this.props;

        if (!scans || !users) {
            return null;
        }

        return (
            <div>
                <div className="Header">
                    Scans:
                </div>
                <div className="ScanList">
                    {this.props.scans.map((scan, i) => {
                        const user = this.props.users.find(u => u.id === scan.scannedByUserId);
                        return (
                            <div
                                className="ScanListItem"
                                key={i}
                            >
                                {scan.name}
                                <div className="UserName">
                                    by <i>{user.name}</i>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ScanList;
