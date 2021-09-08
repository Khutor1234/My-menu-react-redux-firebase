import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    display: 'block',
    margin: '0 auto',
    marginTop: '40px',
    minWidth: 300,
    height: 50,
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,.8)',
    color: '#fff',
  },
  text: {
    marginTop: 40,
    color: '#fff'
  },
  list: {
    color: '#fff',
    maxWidth: 800,
    margin: '0 auto',
    backgroundColor: 'rgba(0,0,0,.6)',
    marginTop: 40
  },
  container: {
    paddingBottom: 50
  },
  input: {
    color: '#fff',
    width: 40,
  },
  typography:{
    margin: '5px 10px 0 10px',
    color: '#fff'
  }
});

export default useStyles;