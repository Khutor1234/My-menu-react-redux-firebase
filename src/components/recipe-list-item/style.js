import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    recipeItemForm: {
        flexGrow: 1,
        height: '50px'
    },
    recipeItemSelect: {
        height: '50px',
        color: '#000'
    },
    recipeItemButton: {
        flexGrow: 1,
        height: '50px'
    },
    recipeText:{
        minHeight: 225,
        padding: 10
    },
    recipeButtons:{
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '0%'
    },
    button:{
        color: '#fff'
    }, 
    ingridList: {
        minHeight: 234,
    },
    recipeItem:{
        padding: '0 20px',
        backgroundColor: 'rgda(0,0,0,.9)'
    }
  }));

export default useStyles;