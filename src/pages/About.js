import React from 'react';
import Layout from '../component/layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:0,
        textAlign:"center",
        p:2,
       "& h4":{
        fontWeight:"bold",
        my:2,
        fontSize:'2rem'
       
       },
       "& p":{
        textAlign:"justify"
       },
       "@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1rem"
        }
       }
      }}>
        <Typography variant='h4'>
        
          Welcome To My Resturant
          <hr />
        </Typography>
        <p>
        Fast food has faced criticism for its association with unhealthy eating habits, often characterized by high levels of salt, sugar, and saturated fats. In response, some fast food chains have introduced healthier menu options, incorporating salads, grilled items, and lower-calorie choices.
        </p>
        <br />
        <p>
          Food ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos explicabo rem molestias doloribus vitae tenetur, dolorem ex enim dolorum minima amet aliquid quo in quod. Incidunt quae iste repellendus doloremque perspiciatis repellat, suscipit ex ab repudiandae atque ad aliquid similique voluptatibus natus consectetur beatae veritatis voluptatem? Pariatur, similique facilis! Incidunt, veniam doloribus eos dolorum saepe perspiciatis, neque ex nesciunt tempore ut dolores? Ut error labore eos aliquam sapiente consectetur delectus temporibus omnis sunt? Temporibus, quibusdam odio voluptate qui praesentium dolorem impedit nisi magni dicta nemo nostrum rem delectus corporis optio minima possimus ipsum eveniet vel alias harum et? Assumenda.
        </p>
        <br />
        <p>
          Testy ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos explicabo rem molestias doloribus vitae tenetur, dolorem ex enim dolorum minima amet aliquid quo in quod. Incidunt quae iste repellendus doloremque perspiciatis repellat, suscipit ex ab repudiandae atque ad aliquid similique voluptatibus natus consectetur beatae veritatis voluptatem? Pariatur, similique facilis! Incidunt, veniam doloribus eos dolorum saepe perspiciatis, neque ex nesciunt tempore ut dolores? Ut error labore eos aliquam sapiente consectetur delectus temporibus omnis sunt? Temporibus, quibusdam odio voluptate qui praesentium dolorem impedit nisi magni dicta nemo nostrum rem delectus corporis optio minima possimus ipsum eveniet vel alias harum et? Assumenda.
        </p>
        <br />
        <p>
          Test ipsum dolor sit amet consectetur adipisicing elit. Id itaque at a inventore placeat, voluptatibus numquam aliquid, eum reiciendis cum velit recusandae maiores, accusamus facere dignissimos magni est officia. Alias delectus, molestias possimus vel explicabo dolores eos! Nisi officiis inventore at quibusdam aut deleniti autem recusandae laudantium nobis veritatis, dolore accusantium sed perspiciatis eum alias accusamus? Deleniti blanditiis illum eius fuga itaque quod labore sint facere quibusdam aut. Veritatis deserunt aspernatur eligendi molestiae delectus eius voluptate, esse, tenetur magnam expedita dolore officia quae nesciunt impedit ipsa soluta quis laudantium reiciendis distinctio commodi. Quis quo provident, dicta voluptatum illum deleniti nihil?
        </p>
        <br />
        <p>
          Best ipsum dolor sit amet consectetur adipisicing elit. Id itaque at a inventore placeat, voluptatibus numquam aliquid, eum reiciendis cum velit recusandae maiores, accusamus facere dignissimos magni est officia. Alias delectus, molestias possimus vel explicabo dolores eos! Nisi officiis inventore at quibusdam aut deleniti autem recusandae laudantium nobis veritatis, dolore accusantium sed perspiciatis eum alias accusamus? Deleniti blanditiis illum eius fuga itaque quod labore sint facere quibusdam aut. Veritatis deserunt aspernatur eligendi molestiae delectus eius voluptate, esse, tenetur magnam expedita dolore officia quae nesciunt impedit ipsa soluta quis laudantium reiciendis distinctio commodi. Quis quo provident, dicta voluptatum illum deleniti nihil?
        </p>
        <br />
        <p>
          Best ipsum dolor sit amet consectetur adipisicing elit. Id itaque at a inventore placeat, voluptatibus numquam aliquid, eum reiciendis cum velit recusandae maiores, accusamus facere dignissimos magni est officia. Alias delectus, molestias possimus vel explicabo dolores eos! Nisi officiis inventore at quibusdam aut deleniti autem recusandae laudantium nobis veritatis, dolore accusantium sed perspiciatis eum alias accusamus? Deleniti blanditiis illum eius fuga itaque quod labore sint facere quibusdam aut. Veritatis deserunt aspernatur eligendi molestiae delectus eius voluptate, esse, tenetur magnam expedita dolore officia quae nesciunt impedit ipsa soluta quis laudantium reiciendis distinctio commodi. Quis quo provident, dicta voluptatum illum deleniti nihil?
        </p>
        <br />
    
      </Box>
    </Layout>
  )
}

export default About
