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
    paddingTop: '50vh',
    alignSelf: 'center',
  },
  button1: {
    paddingRight: '10vw',
  },
  button2: {
    paddingRight: '5vw',
  },
  button3: {
    paddingLeft: '5vw',
  },
  button4: {
    paddingLeft: '10vw',
  },
});