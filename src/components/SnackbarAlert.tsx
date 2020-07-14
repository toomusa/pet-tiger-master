import React from 'react';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

interface Props {
  open: boolean;
  message: string;
  type: Color;
  handleClose: (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => void;
}

export const SnackbarAlert = (props: Props) => {

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
        style={{ top: 80 }}
      >
        <Alert onClose={props.handleClose} severity={props.type}>
          <Typography gutterBottom variant="h6" align="center">
            {props.message}
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}