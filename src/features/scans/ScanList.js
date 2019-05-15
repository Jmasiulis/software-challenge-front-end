import React from 'react';
import uuidv4 from 'uuid/v4';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import StyledPaper from '../../components/StyledPaper';
import StyledTableHeader from '../../components/StyledTableHeader';
import ScanListEditItems from './ScanListEditItems';
import ScanListViewItems from './ScanListViewItems';
import './ScanList.css'

class ScanList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { itemIdsInEdit: [] };
        
        this.editScan = this.editScan.bind(this);
        this.handleEditConfirm = this.handleEditConfirm.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.addScan = this.addScan.bind(this);
    }

    editScan(itemId) {
        const itemIds = this.state.itemIdsInEdit;

        itemIds.push(itemId);
        this.setState({
            itemIdsInEdit: itemIds
        });
    }

    handleEditConfirm(item) {
        item.elevationMin = parseFloat(item.elevationMin);
        item.elevationMax = parseFloat(item.elevationMax);
        this.props.onEditScan(item);
        this.cancelEdit(item.id);
    }

    cancelEdit(itemId) {
        const itemIds = this.state.itemIdsInEdit;
        const index = itemIds.indexOf(itemId);

        itemIds.splice(index, 1);
        this.setState({
            itemIdsInEdit: itemIds
        });
    }

    addScan() {
        const newItemId = uuidv4();
        this.props.onAddScan(newItemId);
        this.editScan(newItemId);
    }

    render() {
        const { scans, users, onSortColumn, onAddScan, orderBy, orderedAscending } = this.props;
        const { itemIdsInEdit } = this.state;

        const rows = [
            { id: 'name', numeric: false, label: 'Name' },
            { id: 'username', numeric: false, label: 'Username' },
            { id: 'elevationMin', numeric: true, label: 'Min Elevation' },
            { id: 'elevationMax', numeric: true, label: 'Max Elevation' },
            { id: 'actions', numeric: false, disablePadding: false, label: '' }
        ];

        if (!scans) {
            return null;
        }

        return (
            <StyledPaper>
                <Table aria-labelledby="tableTitle">
                    <StyledTableHeader
                        rows={rows}
                        onSortColumn={onSortColumn}
                        orderBy={orderBy}
                        orderedAscending={orderedAscending}
                    />
                    <TableBody className="scan-list-view">
                    {scans
                        .map(item => {
                        return (
                            <TableRow
                                hover
                                key={item.id}
                            >
                                {itemIdsInEdit.indexOf(item.id) !== -1 ?
                                    <ScanListEditItems users={users} onEditConfirm={this.handleEditConfirm} onEditCancel={this.cancelEdit} {...item} /> :
                                    <ScanListViewItems onEdit={this.editScan} {...item} />
                                }
                            </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
                <div className="add-scan">
                    <Button variant="contained" size="medium" color="primary" onClick={() => this.addScan()}>
                        Add new scan
                    </Button>
                </div>
            </StyledPaper>
        );
    }
}

export default ScanList;
