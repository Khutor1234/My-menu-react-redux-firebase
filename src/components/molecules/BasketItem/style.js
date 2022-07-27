import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  badge: {
    color: '#fff',
    borderRadius: '100%',
    border: `2px solid #000`,
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  button: {
    position: 'absolute',
    bottom: 3,
    left: 2,
    color: '#fff',
  },
}));

export default useStyles;
