import React, { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { SnackbarAlert } from '../components';
import { Typography, Grid, Box, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { ContactImage } from "../static";
import { Color } from '@material-ui/lab/Alert';

const inquiryOptions = [
  "General Questions",
  "Schedule a Demo",
  "Book a Consultation"
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiry: string;
  message: string;
};

const validate = (formData: FormData) => {
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = emailFormat.test(String(formData.email).toLowerCase());
    const phoneFormat = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    const isPhone = phoneFormat.test(String(formData.phone).toLowerCase());
    return isEmail && isPhone;
}

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [formResult, setFormResult] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = { name, email, phone, inquiry, message };
    console.log(formData)
    const isValid = validate(formData);
    if (isValid) { 
      emailjs.send(
        `gmail`,
        `pet_tiger_web_inquiry`,
        formData,
        `${process.env.REACT_APP_EMAILJS_USER_ID}`
      ).then(() => {
        setFormResult("success");
        setSnackbarMessage("Your message has been sent successfully. We'll get back to you soon!");
        setEmail("");
        setName("");
        setPhone("");
        setInquiry("");
        setMessage("");
        setOpen(true);
      }, () => {
        setFormResult("error");
        setSnackbarMessage("Something went wrong, please try again later.");
        setOpen(true);
      });
    } else {
      setFormResult("error");
      setSnackbarMessage("Please enter a valid email and phone number.");
      setOpen(true);
    }
  }

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Box p={[3, 5, 3, 5]} mt={3}>
        <Typography gutterBottom variant="h2" align="center" className="lg-mg-bottom" style={{ marginBottom: "50px" }}>
          Get in Touch
        </Typography>
        <Grid container justify="center" alignContent="space-around" spacing={4}>
          <Grid item sm={false} md={1} />
          <Grid item xs={12} sm={7} md={6}>
            <div>
              <form autoComplete="off" onSubmit={handleSubmit} >
                <TextField id="standard-full-width" margin="dense" variant="outlined" name="name" label="Name" required value={name} onChange={e => setName(e.target.value)} fullWidth />
                <TextField id="standard-full-width" margin="dense" variant="outlined" name="email" label="Email" required value={email} onChange={e => setEmail(e.target.value)} fullWidth />
                <TextField id="standard-full-width" margin="dense" variant="outlined" name="phone" label="Phone" required value={phone} onChange={e => setPhone(e.target.value)} fullWidth />
                <TextField id="standard-full-width" margin="dense" variant="outlined" name="inquiry" label="Inquiry" required value={inquiry} onChange={e => setInquiry(e.target.value)} fullWidth select>
                  {inquiryOptions.map((option, idx) => (
                    <MenuItem key={idx} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField id="standard-full-width" margin="dense" variant="outlined" name="message" label="Message" required value={message} onChange={e => setMessage(e.target.value)} fullWidth multiline rows={4} rowsMax={15} />
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
      <SnackbarAlert
        open={open}
        handleClose={handleClose}
        type={formResult as Color}
        message={snackbarMessage}
      />
    </div>
  );
}
