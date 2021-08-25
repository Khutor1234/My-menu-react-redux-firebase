import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    header: {
        background: 'rgb(0,0,0)',
    },
    label: {
        flexGrow: 1,
        color: '#fff'
    },
    link: {
        display: 'flex',
        fontSize: 20
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 25,
        height: 25,
    },
    button:{
        backgroundColor: '#fff'
    }
}));

export default useStyles;

