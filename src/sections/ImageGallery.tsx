import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Box from '@material-ui/core/Box';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { ImageModal } from '../components/ImageModal';
import { GridImages } from "../static";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0) 100%)',
    },
  }),
);

export const ImageGallery = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
    <Box p={[3, 5, 3, 5]} m={3}>
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3} spacing={20}>
        {GridImages.map((tile) => (
          <GridListTile 
            key={tile.source}
            data-aos="zoom-in-up"
            data-aos-delay={tile.delay}
          >
            <img src={tile.source} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <ImageModal title={tile.title} source={tile.source} />
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Box>
    </div>
  );
}
