import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: '5%'
  },

  fadeRoot: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    //backgroundColor: '#BBBBBB'
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

  button: {
    borderRadius: 32
  },

  root: {
    width: '100%',
    maxWidth: 360,
  },
}));