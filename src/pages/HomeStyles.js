import { makeStyles } from "@material-ui/core";
import Background from "./ImagemDeFundo.svg";

export const useStyles = makeStyles({
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
    backgroundSize: '1700px',
  },
  homeGeneral: {
    display: 'flex',
  },
  button1: {
    paddingTop: '25vh',
    paddingLeft: '15vw',
  },
  button2: {
    paddingTop: '35vh',
    paddingLeft: '15vw',
  },
  button3: {
    paddingTop: '60vh',
    paddingLeft: '10vw',
  },
  button4: {
    paddingTop: '77vh',
    paddingLeft: '15vw',
  },
  flying: {
    animation: 'fly 0.5s',
  },
  planeContainer: {
    left: 0,
    top: 0,
    transition: 'top 0.5s ease-in-out, left 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out',
  }
});