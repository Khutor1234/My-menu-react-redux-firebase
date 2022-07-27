import { Link } from '@material-ui/core';
import cn from 'classnames';

import useStyles from './style';

const DefaultLink = ({ children, href, className, ...props }) => {
  const classes = useStyles();

  return (
    <Link
      className={cn(classes.link, className)}
      color="inherit"
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default DefaultLink;
