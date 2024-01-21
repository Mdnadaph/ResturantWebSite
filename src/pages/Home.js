import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../component/layout/Layout';
import Food from "../images/food.jpg"
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${Food})`}}>
        <div className="headerCntainer">
          <h1>𝔅𝔥𝔬𝔩𝔞 𝔉𝔬𝔬𝔡𝔰</h1>
          <h3 
          >We provides healthy and hygienic foods</h3>

          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;

