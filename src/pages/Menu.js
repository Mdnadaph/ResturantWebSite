import React from 'react';
import {MenuList} from "../data/data";
import Layout from '../component/layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography,CardActions , Button } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
       <Typography variant='h4' align='center' mt={5} fontWeight={500}>Our Delicious Foods</Typography>

       <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
        {
          MenuList.map(menu =>(
            <Card sx={{maxWidth:'390px', display:'flex', m:2}}>
              <CardActionArea>
                <CardMedia
                sx={{minWidth:'400px'}}
                component={'img'}
                src={menu.image}
                alt={menu.name}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2'> {menu.description} </Typography>
                  <Typography>{menu.price}</Typography>
                </CardContent>
                <CardActions>
                <Button variant="contained" sx={{bgcolor:"red"}}>ORDER NOW</Button>
                 </CardActions>
                </CardActionArea>
            </Card>
          ))
        }
       </Box>
    </Layout>
  )
}

export default Menu;
