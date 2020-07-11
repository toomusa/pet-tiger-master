import React, { useState, FormEvent } from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ContactImage } from "../static";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),
);

const inquiryOptions = [
  "General Questions",
  "Schedule a Demo",
  "Book a Consultation"
]

export const Contact = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');
  const [option, setOption] = useState("Please select one");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = { name, email, phone, inquiry, message };
    console.log(formData)
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box p={[3, 5, 3, 5]} m={3}>
        <Typography gutterBottom variant="h2" align="center" className="lg-mg-bottom">
          Get in Touch
        </Typography>
        <Grid container justify="flex-end" spacing={4}>
          <Grid item xs={12} sm={7}>
            <div>
              <form autoComplete="off" onSubmit={handleSubmit} >
                <TextField id="standard-full-width" margin="dense" variant="outlined" label="Name" required value={name} onChange={e => setName(e.target.value)} fullWidth />
                <TextField id="standard-full-width" margin="dense" variant="outlined" label="Email" required value={email} onChange={e => setEmail(e.target.value)} fullWidth />
                <TextField id="standard-full-width" margin="dense" variant="outlined" label="Phone" required value={phone} onChange={e => setPhone(e.target.value)} fullWidth />
                <TextField id="standard-full-width" margin="dense" variant="outlined" label="Inquiry" required value={inquiry} onChange={e => setInquiry(e.target.value)} fullWidth select>
                  {inquiryOptions.map((option, idx) => (
                    <MenuItem key={idx} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField id="standard-full-width" margin="dense" variant="outlined" label="Message" required value={message} onChange={e => setMessage(e.target.value)} fullWidth multiline rows={4} rowsMax={15} />
                <Box mt={3}>
                  <Button variant="contained" color="secondary" type="submit">Submit</Button>
                </Box>
              </form>
            </div>
          </Grid>
          <Hidden xsDown={true}>
            <Grid item xs={false} sm={5}>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '50vh' }}
              >
                <CardMedia component="img" image={ContactImage.source} style={{ maxHeight: "300px", maxWidth: "250px" }} />
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </div>
  );
}
