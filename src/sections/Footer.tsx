import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroidOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      bottom: 0,
      marginTop: theme.spacing(8),
    },
    footer: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2)
    },
  })
);

export const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Box p={2}>
        <Grid container direction='row'>
          <Grid item xs={false} lg={1} xl={2} />
          <Grid item xs={12} sm={6} lg={5} xl={4}>
            <Typography variant='body1'>
              Orange Enterprises, Inc., operating from Fresno, California since 1984,
              provides labor productivity solutions for the agricultural industry.
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={5} xl={4}>
            <Grid container direction="column" justify="flex-end" alignItems="flex-end" alignContent="flex-end">

              <Grid item xs={12}>
                <Typography variant='subtitle2' display="inline" align="right" className={classes.footer}>
                  1-800-656-7264
              </Typography>
                <PhoneAndroidIcon />
              </Grid>

              <Grid item xs={12}>
                <Typography variant='subtitle1' display="inline" align="right" className={classes.footer}>
                  info@orangesoftware.com
              </Typography>
                <EmailOutlinedIcon />
              </Grid>

              <Grid item xs={12}>
                <Typography variant='subtitle1' display="inline" align="right" className={classes.footer}>
                  Fresno, CA 93711
              </Typography>
                <BusinessOutlinedIcon />
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={false} lg={1} xl={2} />
        </Grid>
      </Box>
    </AppBar>
  );
}