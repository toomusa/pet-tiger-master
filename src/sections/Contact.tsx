import React, { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { Typography, Grid, Box, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { ContactImage } from "../static";

const inquiryOptions = [
  "General Questions",
  "Schedule a Demo",
  "Book a Consultation"
]

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = { name, email, phone, inquiry, message };
    console.log(formData)
    emailjs.send(
      `gmail`, 
      `pet_tiger_web_inquiry`, 
      formData, 
      `${process.env.REACT_APP_EMAILJS_USER_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

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
    </div>
  );
}
