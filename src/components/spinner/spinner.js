import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';

const Spinner = () => {
    const classes = useStyles();

    return (
		<div className={classes.spinner}>
			<CircularProgress color='inherit' size = {100} />
		</div>
    );
};

export default Spinner;