import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography, Grid, Box, Divider } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { VideoCard } from "../components";
import { LandingVideo } from '../static';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    superSub: {
      color: green[600],
      // fontSize: "18px"
    }
  })
)

export const Landing = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box p={[3, 5, 3, 5]} m={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="h2" align={isMd ? "left" : "center"}>PET TIGER</Typography>
            <Typography variant="h5" align={isMd ? "left" : "center"}>{`Labor & Productivity Management System`}</Typography>
            <Box m={2}>
              <Divider />
            </Box>
            <Typography variant="subtitle1" color="textSecondary" align={isMd ? "left" : "center"}>
              {`A comprehensive solution for Agricultural industries that collects 
              labor and harvest data for Payroll, 
              HR, Logistics, Packing, Accounting, and Marketing departments – all 
              in real-time – while keeping in compliance with all labor laws and 
              wage orders.`}
            </Typography>
          </Grid>
          <Box border="1px" m="auto" >
            <Grid item xs={12} md={5} data-aos="zoom-in-left" data-aos-delay={200}>
              <VideoCard source={LandingVideo.source} title="Intro to PET Tiger" />
            </Grid>
          </Box>
        </Grid>
        <Box mt={4}>
          <Grid container alignContent="center" alignItems="center" justify="center">
            <Grid item xs={12}>
              <Typography variant="h6" align="center" className={classes.superSub}>
                {`If you trim, cultivate, harvest or pack – we have a 
                  solution for your unique environment.`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}