import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'rgba(0,0,0,.3)',
        width: '200px',
        marginLeft: 100,
        marginTop: 10
    },
    form: {
        width: '100%'
    },
    field: {
        marginTop: 5,
        width: '100%'
    },
    ingred: {
        marginTop: 10
    },
    radio: {
        marginTop: 20
    },
    text: {
        marginTop: 10,
        maxWidth: '100%',
        minWidth: '100%'
    },
    name: {
        width: 200,
        marginRight: 35
    },
    weight: {
        width: 100,
        marginRight: 30
    },
    img:{
        width: '100%'
    },
    icon: {
        marginTop: 15,
    },
    allIngred: {
        marginTop: 10,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.87)'
    },
    error: {
        color: 'red',
        textAlign: 'center'
    },
    deleteIcon: {
        marginBottom: -5,
        marginLeft: 3
    },
    ingrid: {
        margin: 0,
        padding: 0,
    },
    ingridItem: {
        marginRight: 10,
        display: 'inline',
        listStyleType: 'none',
        
    },
    ingridText: {
        display: 'inline',
        fontSize: 12,
        margin: 0
    },
    ingridIcon: {
        display: 'inline',

    }
}));

export default useStyles;