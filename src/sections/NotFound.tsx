import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  homeBtn: {
    color: "#2e7d32"
  }
})

export const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Typography variant="h1">NotFound Page</Typography>
    </Grid>
  );
}