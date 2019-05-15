import React, { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
        const { users, onEditConfirm, onEditCancel, name, id } = this.props;

        return (
            <Fragment>
                <TableCell>
                    <TextField
                        id="standard"
                        defaultValue={name}
                        onChange={(e) => this.handleChange(e, 'name')}
                        margin="normal"
                    />
                </TableCell>
                <TableCell>
                    <Select
                        value={this.state.username || ''}
                        onChange={(e) => this.handleChange(e, 'username')}
                        inputProps={{
                            name: 'username',
                            id: 'username',
                        }}
                    >
                        {users.map((item) => {
                            return (<MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>)
                        })}
                    </Select>
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="standard-number"
                        value={this.state.elevationMin || 0}
                        onChange={(e) => this.handleChange(e, 'elevationMin')}
                        type="number"
                        margin="normal"
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="standard-number"
                        value={this.state.elevationMax || 0}
                        onChange={(e) => this.handleChange(e, 'elevationMax')}
                        type="number"
                        margin="normal"
                    />
                </TableCell>
                <TableCell align="right">
                    <Button className="edit-scan-button" variant="outlined" size="medium" color="secondary" onClick={() => onEditCancel(id)}>
                        Cancel
                    </Button>
                    <Button
                        disabled={!this.state.name || !this.state.username || !this.state.elevationMin || !this.state.elevationMax}
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

export default ScanListEditItems;