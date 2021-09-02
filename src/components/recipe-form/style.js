import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'rgba(0,0,0,.3)',
        width: '200px',
        margin: '0 auto',
        marginTop: 10
    },
    form: {
        width: '100%'
    },
    field: {
        marginTop: 5
    },
    ingred: {
        marginTop: 10
    },
    radio: {
        marginTop: 20
    },
    text: {
        marginTop: 10
    },
    name: {
        width: 200,
        marginRight: 35
    },
    weight: {
        width: 100,
        marginRight: 30
    },
    icon: {
        marginTop: 15,
    },
    allIngred: {
        marginTop: 10,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.87)'
    }
}));

export default useStyles;