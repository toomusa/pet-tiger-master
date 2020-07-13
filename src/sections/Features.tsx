import React from "react";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, Box } from "@material-ui/core";
import FeatureCard from "./FeatureCard";
import { FeaturesContent } from "../static";

export const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box p={[3,5,3,5]} m={3}>
        <div className="container-fluid lg-p-top">
          <Typography gutterBottom variant="h2" align="center" className="lg-mg-bottom" style={{ marginBottom: "50px" }}>
            Features
          </Typography>
          <div className="container-fluid">
            <Grid container spacing={4}>
              {FeaturesContent.map(element => (
                <Grid
                  item
                  xs={6}
                  md={4}
                  data-aos="zoom-in-up"
                  data-aos-delay={isMd ? element.mdDelay : element.smDelay}
                  key={element.headline}
                >
                  <FeatureCard
                    Icon={element.icon}
                    color={element.color}
                    headline={element.headline}
                    text={element.text}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Box>
    </div>
  );
}
