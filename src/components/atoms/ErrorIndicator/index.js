import useStyles from './style';

const ErrorIndicator = () => {
  const classes = useStyles();

  return <div className={classes.error}>Error!</div>;
};

export default ErrorIndicator;
