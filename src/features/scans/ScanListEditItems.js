import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class ScanListEditItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      username: props.username,
      elevationMin: props.elevationMin,
      elevationMax: props.elevationMax
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  render() {
    const {
      users, onEditConfirm, onEditCancel, id
    } = this.props;

    const {
      username, elevationMin, elevationMax, name
    } = this.state;

    return (
      <Fragment>
        <TableCell>
          <TextField
            id="standard"
            defaultValue={name}
            onChange={e => this.handleChange(e, 'name')}
            margin="normal"
          />
        </TableCell>
        <TableCell>
          <Select
            value={username || ''}
            onChange={e => this.handleChange(e, 'username')}
            inputProps={{
              name: 'username',
              id: 'username',
            }}
          >
            {users.map(item => (
              <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>))
            }
          </Select>
        </TableCell>
        <TableCell align="right">
          <TextField
            id="standard-number"
            value={elevationMin || 0}
            onChange={e => this.handleChange(e, 'elevationMin')}
            type="number"
            margin="normal"
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            id="standard-number"
            value={elevationMax || 0}
            onChange={e => this.handleChange(e, 'elevationMax')}
            type="number"
            margin="normal"
          />
        </TableCell>
        <TableCell align="right">
          <Button className="edit-scan-button" variant="outlined" size="medium" color="secondary" onClick={() => onEditCancel(id)}>
            Cancel
          </Button>
          <Button
            disabled={!name || !username || !elevationMin || !elevationMax}
            className="edit-scan-button"
            variant="outlined"
            size="medium"
            color="primary"
            onClick={() => onEditConfirm(this.state)}
          >
            Confirm
          </Button>
        </TableCell>
      </Fragment>
    );
  }
}

ScanListEditItems.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  username: PropTypes.string,
  elevationMax: PropTypes.number,
  elevationMin: PropTypes.number,
  onEditConfirm: PropTypes.func.isRequired,
  onEditCancel: PropTypes.func.isRequired,
};

ScanListEditItems.defaultProps = {
  name: null,
  username: null,
  elevationMin: 0,
  elevationMax: 0
};

export default ScanListEditItems;
