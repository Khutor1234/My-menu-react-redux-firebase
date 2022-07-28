import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
  form: {
    width: '100%',
  },
  name: {
    marginTop: 5,
    width: '100%',
  },
  ingred: {
    marginTop: 10,
  },
  radio: {
    marginTop: 20,
  },
  text: {
    marginTop: 10,
    maxWidth: '100%',
    minWidth: '100%',
  },
  ingredName: {
    width: 200,
    marginRight: 35,
  },
  weight: {
    width: 100,
    marginRight: 30,
  },
  img: {
    width: '100%',
  },
  icon: {
    marginTop: 15,
  },
  allIngred: {
    marginTop: 10,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  deleteIcon: {
    marginBottom: -5,
    marginLeft: 3,
  },
  ingrid: {
    margin: 0,
    padding: 0,
  },
  ingridItem: {
    marginRight: 10,
    display: 'inline',
    listStyleType: 'none',
  },
  ingridText: {
    display: 'inline',
    fontSize: 12,
    margin: 0,
  },
  ingridIcon: {
    display: 'inline',
  },
  recipeImg: {
    width: '100%',
    height: 130,
  },

  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
}));

export default useStyles;
