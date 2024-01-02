import React from 'react'
import Layout from '../component/layout/Layout'
import {  Button, Card, CardContent, Grid,  TextField, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Typography variant='h4' align='center'>
        Contact Us Our Resturant
      </Typography>
      <Card style={{maxWidth:'450', margin:"0 auto"}}>
        <CardContent>
        <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField label="First Name" placeholder='Enter First Name' fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder='Enter Last Name' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <TextField type='email' label="Email" placeholder='Enter email' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <TextField type='number' label="Phone" placeholder='Enter Phone' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <TextField  label="Message" multiline rows={7} placeholder='Type Our Message Here' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
            <Button sx={{bgcolor:"#d32f2f"}} type='submit' variant='contained' fullWidth>Submit</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default Contact
