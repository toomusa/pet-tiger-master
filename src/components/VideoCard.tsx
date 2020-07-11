import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';

interface Props {
  source: string;
  title?: string
}

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minWidth: 300,
  },
  content: {
    padding: 10
  }
});

export const VideoCard = ({ source, title }: Props) => {
  const classes = useStyles();

  return (
    <Box border="1px" mb={1} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="iframe"
          image={source}
          height="200"
          width="400"
          allowFullScreen
        />
        {title
          ? <CardContent className={classes.content}>
              <Typography variant="h6" align="center" color="secondary">
                {title}
              </Typography>
            </CardContent>
          : null}
        </CardActionArea>
      </Card >
    </Box>
  );
}