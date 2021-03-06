import React from 'react'
import { AppBar, makeStyles } from "@material-ui/core";
import { Instagram, YouTube, Facebook } from "@material-ui/icons"
import {useStyles} from './FooterStyles'

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar} >
      <div className={classes.appBarContainer}>
        <div className={classes.appBarSubContainer}>
          <div className={classes.appBarInfo}>
            <p>contato@tailwindaviation.com</p>
            <p>31 0000-0000</p>
          </div>

          <div className={classes.appBarInfo}>
            <p>Endereço n°0</p>
            <p>Bairro, Belo Horizonte, MG</p>
          </div>
        </div>
        
        <div className={classes.appBarIcons}>
          <a href="https://www.instagram.com/?hl=pt-br" className={classes.href}>
            <Instagram className={classes.icon} style={{ color: '#000000' }} />
          </a>
          <a href="https://pt-br.facebook.com/">
            <Facebook className={classes.icon} style={{ color: '#000000' }} />
          </a>
          <a href="https://www.youtube.com/?hl=pt&gl=BR">
            <YouTube className={classes.icon} style={{ color: '#000000' }} />
          </a>
        </div>

      </div>
    </AppBar>
  );
};

export default Footer;