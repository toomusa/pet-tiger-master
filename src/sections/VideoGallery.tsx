import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Typography, Grid, Box } from '@material-ui/core';
import { VideoCard } from "../components";
import { FieldVideos } from "../static";

const useStyles = makeStyles({
  homeBtn: {
    color: "#2e7d32"
  }
})

export const VideoGallery = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box p={[3, 5, 3, 5]} m={3}>
        <div className="container-fluid lg-p-top">
          <Typography gutterBottom variant="h2" align="center" className="lg-mg-bottom">
            PET Tiger in the Field
          </Typography>
          <div >
            <Grid container spacing={2} >
              {FieldVideos.map(({ title, source, mdDelay, smDelay }, idx) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6}
                  md={4}
                  data-aos="zoom-in-up"
                  data-aos-delay={isMd ? mdDelay : smDelay}
                  key={idx}
                >
                  <VideoCard source={source} title={title} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Box>
    </div>
  );
}