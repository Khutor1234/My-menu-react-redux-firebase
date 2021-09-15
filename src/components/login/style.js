import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    mainPaper:{
        position: 'fixed',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/12/28/12/32/set-3045129_960_720.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '20% 20%'
    },
    input:{
        width: '100%',
        marginBottom: 10
    },
    button: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: 100,
        backgroundColor: '#000',
        color: '#fff',
        '&:hover': { background: "rgb(50,50,50)"},
    },
  }));

export default useStyles