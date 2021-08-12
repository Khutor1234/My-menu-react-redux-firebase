import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	spinner: {
    	color: '#fff',
		display: 'flex',
		justifyContent: 'center',
		height: '1080px'
    },
}));

const Spinner = () => {
    const classes = useStyles();

    return (
		<div className={classes.spinner}>
			<CircularProgress color='inherit' size = {100} />
		</div>
    );
};

export default Spinner;