import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const ORDER_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc'
};

export default function StyledTableHeader({
  rows, orderBy, onSortColumn, orderedAscending
}) {
  return (
    <TableHead>
      <TableRow>
        {rows.map(
          row => (
            <TableCell
              key={row.id}
              align={row.numeric ? 'right' : 'left'}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={orderedAscending ? ORDER_DIRECTION.ASC : ORDER_DIRECTION.DESC}
                onClick={() => onSortColumn(row.id)}
              >
                {row.label}
              </TableSortLabel>
            </TableCell>
          ),
          this,
        )}
      </TableRow>
    </TableHead>
  );
}

StyledTableHeader.propTypes = {
  orderBy: PropTypes.string,
  onSortColumn: PropTypes.func.isRequired,
  orderedAscending: PropTypes.bool.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      elevationMin: PropTypes.number,
      elevationMax: PropTypes.number,
      username: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
};

StyledTableHeader.defaultProps = {
  orderBy: null
};
