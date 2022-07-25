import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  subheader: {
    position: 'relative',
    color: '#fff',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(7),

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  content: {
    position: 'relative',
    padding: theme.spacing(3),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
}));

export default useStyles;
