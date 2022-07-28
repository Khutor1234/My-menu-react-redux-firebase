import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: {
    marginTop: 10,
    marginRight: 10,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'inline',
  },
  ingredList: {
    margin: 0,
    padding: 0,
    display: 'inline',
  },
  ingredItem: {
    marginRight: 10,
    display: 'inline',
    listStyleType: 'none',
  },
  icon: {
    marginBottom: -5,
    marginLeft: 3,
  },
  ingredName: {
    display: 'inline',
    fontSize: 12,
    margin: 0,
  },
}));

export default useStyles;
