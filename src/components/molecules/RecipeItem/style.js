import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    minHeight: 225,
    padding: 10,
  },
  ingredList: {
    minHeight: 234,
  },
  ingred: {
    padding: '0 20px',
    backgroundColor: 'rgda(0,0,0,.9)',
  },
  buttons: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '0%',
  },
  button: {
    color: '#fff',
  },
  form: {
    flexGrow: 1,
    height: '50px',
  },
  select: {
    height: '50px',
    color: '#000',
  },
  warning: {
    color: 'red',
    textAlign: 'center',
  },
}));

export default useStyles;
