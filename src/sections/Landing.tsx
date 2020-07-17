import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography, Grid, Box, Divider } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { VideoCard } from "../components";
import { LandingVideo } from '../static';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import petTiger from "../assets/images/petTiger.png";
import petLogoLong from "../assets/images/petLogoLong.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    superSub: {
      color: green[600],
    },
    avatar: {
      // zIndex: 99,
      // float: 'left',
      marginTop: "10px",
      // marginRight: "25px",
      // marginBottom: "60px",
      height: "160px",
      width: "100px",
    },
    avatarSmall: {
      // zIndex: 99,
      // marginTop: "10px",
      marginRight: "auto",
      marginLeft: "auto",
      // marginBottom: "60px",
      height: "70px",
      width: "80px",
    }
  })
)

export const Landing = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isXs = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box p={[3, 5, 3, 5]} mb={3}>
        <Grid container spacing={4} alignContent="space-around">
          <Grid item xs={false} lg={1} />
          {/* <Box > */}
          <Grid item xs={12} md={7} lg={6}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                {isXs
                  ? <Avatar variant="rounded" alt="PET Tiger" src={petLogoLong} className={classes.avatar} />
                  : <Avatar variant="rounded" alt="PET Tiger" src={petTiger} className={classes.avatarSmall} />
                }
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography variant="h2" align={isXs ? "left" : "center"}>PET TIGER</Typography>
                {/* <Box ml={15.5}> */}
                <Typography variant="h5" align={isXs ? "left" : "center"}>{`Labor & Productivity Management System`}</Typography>
                {/* </Box> */}
                <Box m={2}>
                  <Divider />
                </Box>
                <Typography variant="subtitle1" color="textSecondary" align={isXs ? "left" : "center"}>
                  {`A comprehensive solution for Agricultural industries that collects 
                  labor and harvest data for Payroll, 
                  HR, Logistics, Packing, Accounting, and Marketing departments – all 
                  in real-time – while keeping in compliance with all labor laws and 
                  wage orders.`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* </Box> */}
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