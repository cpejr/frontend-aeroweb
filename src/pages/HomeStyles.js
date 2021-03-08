import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Background from "./ImagemDeFundo.svg";

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundSize: '1700px',
  },
  homeContainerChildren: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: "url("+ Background +")",
    backgroundSize: 'cover',
    position: 'absolute'
  },
  homeGeneral: {
    display: 'flex',
  },
  button1: {
    paddingTop: '25vh',
    paddingLeft: '15vw',
    opacity: 1,
    color: red,
    width:"58px", 
    height:"22px",
    [theme.breakpoints.down("765")]: {
      paddingLeft: '5vw',
      width: '50px',
      height: '20px',
    },
  },
  button2: {
    paddingTop: '35vh',
    paddingLeft: '10vw',
    width:"93px",
    height:"24px",
    [theme.breakpoints.down("765")]: {
      paddingLeft: '5vw',
      width: '50px',
      height: '20px',
    },
  },
  button3: {
    paddingTop: '60vh',
    paddingLeft: '5vw',
    width:"142px",
    height:"22px",
    [theme.breakpoints.down("765")]: {
      paddingLeft: '5vw',
      width: '106px',
      height: '20px',
    },
  },
  button4: {
    paddingTop: '77vh',
    paddingLeft: '15vw',
    width:"98px",
    height:"22px",
    [theme.breakpoints.down("765")]: {
      paddingLeft: '5vw',
      width: '50px',
      height: '20px',
    },
  },
  flying: {
    animation: 'fly 0.5s',
  },
  planeContainer: {
    left: 0,
    top: 0,
    transition: 'top 1.5s ease-in-out, left 1.5s ease-in-out, width 1.5s ease-in-out, height 1.5s ease-in-out',
  },
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
    //backgroundColor:' #3467eb77'
  },

  fadeRoot: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    //backgroundColor: '#3467eb77'
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