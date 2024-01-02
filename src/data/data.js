import Dosa from "../images/dosa.jpg";
import Chola from "../images/chhola.jpg";
import kera from "../images/kera.jpg"
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Gujrati from "../images/gujrati.jpeg";
import Chart from "../images/chart.avif";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Burgur from "../images/Burgur.jpg";
import amlet from "../images/amlet.jpg";
import { Typography } from "@mui/material";



export const MenuList = [
    {
       
        name:'Dosa',
        description:'It is a very much delicious fast food in nepal must of the people love to it in street area due to its price and test.',
        image:Burgur,
        price:<Typography  sx={{fontSize:'25px'}}>
            <CurrencyRupeeIcon/>150
        </Typography>
        
    },
    {
       
        name:'Chola',
        description:'It is a delicious fast food among the nepalese must of the people love to eat in open street area due they only wants to the test.',
        image:amlet,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>175
        </Typography>
    },
    {
       
        name:'Chart',
        description:'Chart is also a delicious fast food among the younger generation of the nation due to its different testes.',
        image:Chart,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>200
        </Typography>
    },
    {
       
        name:'MasalaDosa',
        description:'It is a very much delicious fast food in nepal must of the people love to it in street area due to its price and test.',
        image:MasalaDosa,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>225
        </Typography>
    },
    {
       
        name:'Paneer',
        description:'It is  made by the milk so vigiterian non-vegiterian both of the people love to eat .',
        image:Paneer,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>215
        </Typography>
    },
    {
       
        name:'Janakpure Rooti',
        description:'It is a large combitation of food but more loveable by all the ages the people in Tarai Madesh because of its provides alote of test in a single items.',
        image:Gujrati,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>210
        </Typography>
    },
    {
       
        name:'Janakpure Chips',
        description:'It is a large combitation of food but more loveable by all the ages the people in Tarai Madesh because of its provides alote of test in a single items.',
        image:kera,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>210
        </Typography>
    },
    {
       
        name:'Janakpure Puri Chola',
        description:'It is a large combitation of food but more loveable by all the ages the people in Tarai Madesh because of its provides alote of test in a single items.',
        image:Chola,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>210
        </Typography>
    },
    {
       
        name:'Janakpure rol',
        description:'It is a large combitation of food but more loveable by all the ages the people in Tarai Madesh because of its provides alote of test in a single items.',
        image:Dosa,
        price:<Typography  sx={{fontSize:'25px'}}>
        <CurrencyRupeeIcon/>210
        </Typography>
    },
];