import { Grid, Paper, Button } from '@material-ui/core';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { userSelector } from '../../../store/selectors/user';
import { logIn } from '../../../store/actions/user';

import useStyles from './style';

const Login = ({ logIn, user }) => {
  const classes = useStyles();

  if (user) {
    return <Redirect to="/recipes" />;
  }

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

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logIn,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
