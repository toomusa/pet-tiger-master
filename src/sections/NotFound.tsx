import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Typography, Grid, Box, Button } from '@material-ui/core';

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    margin: "auto"
  }
})

export const NotFound = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box p={[3, 5, 3, 5]} mb={3}>
        <Grid container direction="column" justify="center" alignContent="center">
          <Box p={3} m={3}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center">Uh oh! Something went wrong :(</Typography>
            </Grid>
          </Box>
          <Box p={3} m={3}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">The page you're looking for can't be found</Typography>
            </Grid>
          </Box>
          <Box p={3} my={3} mx="auto">
            <Grid item xs={12}>
              <Link to="/" className={classes.link}>
                <Button variant="contained" color="primary" size="large">
                  <Typography variant="h5" align="center">
                    Go Back Home
                    </Typography>
                </Button>
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}