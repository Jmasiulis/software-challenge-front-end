import React, { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

export default function ScanListViewItems({ onEdit, name, username, elevationMin, elevationMax, id }) {
    return (
        <Fragment>
            <TableCell>{name}</TableCell>
            <TableCell><i>{username}</i></TableCell>
            <TableCell align="right">{elevationMin}</TableCell>
            <TableCell align="right">{elevationMax}</TableCell>
            <TableCell align="right">
                <Button variant="contained" size="medium" color="primary" onClick={() => onEdit(id)}>
                    Edit
                </Button>
            </TableCell>
        </Fragment>
    );
}