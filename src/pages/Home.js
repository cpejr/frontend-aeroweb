import React, { useState } from "react"
import { useStyles } from './HomeStyles'
import AnimatedModal from '../components/AnimatedModal/AnimatedModal'
import Footer from '../components/Footer/Footer'

// let doge = require('../images/doge.jpg')

function Home() {

  const classes = useStyles;

  return (
    <div className={classes.homeContainer}>
      <AnimatedModal /> 

      <Footer />
    </div>
  );
}

export default Home;

