import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ZoomOutMapOutlinedIcon from '@material-ui/icons/ZoomOutMapOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

interface Props {
  title: string;
  source: string;
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    color: theme.palette.primary.light,
  },
}));

export const ImageModal = (props: Props) => {
  const { title, source } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <ZoomOutMapOutlinedIcon className={classes.title} />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box>
              <Typography variant="h5" align="center">
                {title}
              </Typography>
              <Box mt={1} mb={2}>
                <Divider />
              </Box>
              <img src={source} alt={title} />
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}