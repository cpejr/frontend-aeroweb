import React, { useState } from "react";
import { useStyles } from './HomeStyles'
import { 
  Button, 
  Modal, 
  Fade, 
  Grow, 
  Card, 
  CardContent, 
  CardActions 
} from '@material-ui/core'
import Footer from '../components/Footer/Footer'

function Home() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.root}>
        <Button
          color='primary'
          variant='outlined'
          className={classes.button}

          onClick={() => setOpen(true)}
        >
          Abrir Modal
        </Button>
      </div>

      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
      >
        <Grow in={open} timeout={2500}>
          <Fade in={open} timeout={2500}>
            <div className={classes.fadeRoot}>
              <Card className={classes.card}>
                <CardContent>
                  <h1>Sic Mundus Creatus Est</h1>
                  <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor in mi ut egestas. Phasellus mi neque, viverra sed pulvinar sit amet, eleifend non ante. Phasellus vel nibh tempor, tincidunt tortor nec, molestie nibh. Morbi nec odio volutpat, mollis quam a, fringilla urna. Cras iaculis velit risus, convallis vestibulum urna sollicitudin et. Aenean id ex finibus, rutrum enim sed, semper ante. In aliquam, arcu id consectetur euismod, purus turpis tincidunt felis, vitae dapibus erat sem quis turpis. Mauris non scelerisque lorem, ac ornare nulla. Mauris venenatis elit id tellus convallis tempus. In blandit vulputate eros, a rutrum purus. Aliquam eu mi at diam bibendum mollis convallis et sem. </p1>
                  <br />
                  <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor in mi ut egestas. Phasellus mi neque, viverra sed pulvinar sit amet, eleifend non ante. Phasellus vel nibh tempor, tincidunt tortor nec, molestie nibh. Morbi nec odio volutpat, mollis quam a, fringilla urna. Cras iaculis velit risus, convallis vestibulum urna sollicitudin et. Aenean id ex finibus, rutrum enim sed, semper ante. In aliquam, arcu id consectetur euismod, purus turpis tincidunt felis, vitae dapibus erat sem quis turpis. Mauris non scelerisque lorem, ac ornare nulla. Mauris venenatis elit id tellus convallis tempus. In blandit vulputate eros, a rutrum purus. Aliquam eu mi at diam bibendum mollis convallis et sem. </p1>
                </CardContent>
              
                <CardActions>
                  <Button
                    style={{ color: '#a83232' }}
                    variant='outlined'
                    className={classes.button}

                    onClick={() => setOpen(false)}
                  >
                    Fechar Modal
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Fade>
        </Grow>
      </Modal>

      <Footer />
    </div>
  );
}

export default Home;

