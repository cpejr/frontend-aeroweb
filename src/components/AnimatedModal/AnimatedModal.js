import React, { useState } from 'react'
import { 
  Button, 
  Modal, 
  Fade, 
  Grow, 
  Card, 
  CardContent, 
  CardActions,
  CardMedia,
  makeStyles,
  Typography 
} from '@material-ui/core'
import { ExpandMore } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: '5%'
  },

  root: {
    width: '100%',
    maxWidth: 360,
  },

  modalBackground: {
    backgroundColor:' #3467eb77'
  },

  fadeRoot: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#3467eb77'
  },

  backDrop: {
    backdropFilter: 'blur(3px)',
    backgroundColor:'rgba(0,0,30,0.4)'
  },

  card: {
    maxWidth: '50%',

    padding: 16,
    elevation: 8
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  }, 

  cardTitle: {
    width: '95%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 16
  }, 

  cardBody: {
    width: '95%',
    
    display: 'flex',
    flexDirection: 'column',
  }, 

  buttonContainer: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#3467eb',
    '&:hover': {
      backgroundColor: '#3467eb'
    }
  },

  buttonOut: {
    '&:hover': {
      borderBottom: '4px solid'
    }
  },

  media: {
    height: "30%",
    width: "30%"
  },
}));

function AnimatedModal() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Button
          color='primary'
          className={classes.buttonOut}
          variant='text'
          onClick={() => setOpen(true)}
        >
          Cursos
        </Button>
      </div>

      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        classNme={classes.modalBackground}
      >
        <Grow in={open} timeout={2500}>
          <Fade in={open} timeout={2500}>
            <div className={classes.fadeRoot}>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                      <Typography variant="h4" style={{ color: '#3467eb' }}>
                        Título do Curso
                      </Typography>
                      <ExpandMore onClick={() => setOpen(false)} fontSize="large" />
                    </div>
                    <div className={classes.cardBody}>
                      <Typography variante="h6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor in mi ut egestas. Phasellus mi neque, viverra sed pulvinar sit amet, eleifend non ante. Phasellus vel nibh tempor, tincidunt tortor nec, molestie nibh. Morbi nec odio volutpat, mollis quam a, fringilla urna. Cras iaculis velit risus, convallis vestibulum urna sollicitudin et. Aenean id ex finibus, rutrum enim sed, semper ante. In aliquam, arcu id consectetur euismod, purus turpis tincidunt felis, vitae dapibus erat sem quis turpis. Mauris non scelerisque lorem, ac ornare nulla. Mauris venenatis elit id tellus convallis tempus. In blandit vulputate eros, a rutrum purus. Aliquam eu mi at diam bibendum mollis convallis et sem.
                    </Typography>
                    </div>
                  </div>
                </CardContent>


                <CardActions>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant='contained'
                      className={classes.button}
                      onClick={() => setOpen(false)}
                    >
                      Garanta sua vaga
                    </Button>
                  </div>

                </CardActions>
              </Card>
            </div>
          </Fade>
        </Grow>
      </Modal>
    </div>
  );

}

export default AnimatedModal;