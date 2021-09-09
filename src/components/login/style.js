import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainPaper:{
        position: 'fixed',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundImage: 'url(https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%B7%D1%88%D0%BE%D0%B2%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0-%D0%BF%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE-%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F-%D1%84%D0%B0%D1%81%D1%82%D1%84%D1%83%D0%B4-200598354.jpg)',
    },
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 20,
        height: 250,
        width: 350,
    },
    input:{
        width: '100%',
        marginBottom: 10
    },
    button: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#000',
        color: '#fff'
    }
  }));

export default useStyles