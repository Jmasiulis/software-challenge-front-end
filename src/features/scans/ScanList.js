import React from 'react';
import StyledPaper from '../../components/StyledPaper';
import StyledTableHeader from '../../components/StyledTableHeader';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import './ScanList.css'

class ScanList extends React.Component {
    render() {
        const { scans, onSortColumn, orderBy, orderedAscending } = this.props;

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
                    <TableBody>
                    {scans
                        .map(n => {
                        return (
                            <TableRow
                                hover
                                tabIndex={-1}
                                key={n.name}
                            >
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.username}</TableCell>
                                <TableCell align="right">{n.elevationMin}</TableCell>
                                <TableCell align="right">{n.elevationMax}</TableCell>
                                <TableCell align="right">{n.protein}</TableCell>
                            </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </StyledPaper>
        );
    }
}

export default ScanList;
