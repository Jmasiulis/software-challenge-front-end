import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';

export default function StyledPaper({ children }) {
  return (
    <MuiThemeProvider>
      <Paper>
        {children}
      </Paper>
    </MuiThemeProvider>
  );
}

StyledPaper.propTypes = {
  children: PropTypes.node.isRequired
};
