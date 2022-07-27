import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 50,
  },
  button: {
    display: 'block',
    margin: '0 auto',
    marginTop: 20,
    minWidth: 300,
    height: 50,
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,.8)',
    color: '#fff',
  },
  basket: {
    marginTop: 40,
  },
  title: {
    color: '#fff',
    fontSize: 27,
  },
  spinner: {
    paddingTop: 110,
  },
}));

export default useStyles;
