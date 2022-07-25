import { Button } from '@material-ui/core';
import cn from 'classnames';

import useStyles from './style';

const DefaultButton = ({
  text,
  className,
  appearance,
  onClick = () => {},
  ...props
}) => {
  const classes = useStyles();

  return (
    <Button
      color="inherit"
      variant="outlined"
      className={cn(classes.button, className, {
        [classes.dark]: appearance === 'dark',
      })}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};

export default DefaultButton;
