import { Grid, Paper, Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logIn } from '../../../store/actions/user';
import useStyles from './style';

const Login = ({ logIn }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Grid>
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          onClick={() => logIn()}
        >
          Войти с помощью Google
        </Button>
      </Grid>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logIn,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Login);
