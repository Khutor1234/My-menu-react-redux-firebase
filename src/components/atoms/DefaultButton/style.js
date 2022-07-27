import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  dark: {
    backgroundColor: 'rgb(0,0,0)',
  },
  white: {
    flexGrow: 1,
    height: '50px',
    color: '#000',
    backgroundColor: '#fff',
  },
  black: {
    display: 'block',
    margin: '0 auto',
    marginTop: 20,
    minWidth: 300,
    height: 50,
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,.8)',
    color: '#fff',
    border: '1px solid #000',
  },
}));

export default useStyles;
