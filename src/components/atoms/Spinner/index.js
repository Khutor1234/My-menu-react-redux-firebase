import CircularProgress from '@material-ui/core/CircularProgress';
import cn from 'classnames';

import useStyles from './style';

const Spinner = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.spinner, className)}>
      <CircularProgress color="inherit" size={100} />
    </div>
  );
};

export default Spinner;
