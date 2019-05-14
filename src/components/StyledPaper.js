import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from '@material-ui/core/Paper';

export default function StyledPaper(props) {
  return (
    <MuiThemeProvider>
      <Paper>
        {props.children}
      </Paper>
    </MuiThemeProvider>
  );
}