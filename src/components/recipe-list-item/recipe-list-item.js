import {Card, CardMedia, CardContent, CardActions,FormControl,InputLabel,Typography,Select,Button} from '@material-ui/core';


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
  }));

const RecipeListItem = ({ recipe, onAddedToMenu, onCategoryChange, onChangeImg}) => {

    const classes = useStyles();
    const { text, title, ingrid, category, img } = recipe;

    let ingridients;
        
    if(ingrid) {
        ingridients = ingrid.map((item) => {
            const {name, weight, id} = item;

            return (
                <li key = {id}>
                  	<div>{name}</div> 
                  	<span>{weight} г</span>
                </li>
            );
        });
    };
    
    let id = 1;

    let categoryItem;

    if(category){
        categoryItem =  category.map((item) => {
            return <option key = {id++} value = {item} >{item}</option>
        })
    }

    const recipeCover = img ? <p className="card-text">img</p> :
        <p className="card-text">{text}</p>


    return(
        <div>
            <Card >
                <CardMedia 
                    component='img'
                    height='250'
                    image='https://media.istockphoto.com/photos/stack-of-milk-and-dark-chocolate-with-nuts-caramel-and-fruits-and-on-picture-id965487714?k=6&m=965487714&s=612x612&w=0&h=v8epNbu2l-kk4GjK-Wzfjzx-Ui3MlOkw4w7dtrN_lL8='
                    alt='Фото рецепта' />
                <CardContent>
                    <Typography variant='h5'>{title}</Typography>
                </CardContent>
                <CardActions>
                    <FormControl variant="outlined" className={classes.recipeItemForm}>
                        <InputLabel htmlFor="outlined-age-native-simple">Прием еды</InputLabel>
                        <Select 
                            className={classes.recipeItemSelect}
                            native
                            onChange={e => onCategoryChange(e)}
                            label="Прием еды"
                            inputProps={{
                                id: 'outlined-age-native-simple',
                            }} >
                                <option aria-label="None" value="" />
                                    {
                                        categoryItem
                                    }
                        </Select>
                    </FormControl>
                    <Button 
                        size='large' 
                        variant='outlined' 
                        className={classes.recipeItemButton} 
                        onClick = {onAddedToMenu}>Добавить</Button>
                </CardActions>
            </Card>


            {/* <div className = 'recipe-item'>
            <div className="card border-primary mb-3">
                <div className = 'recipe-cover'
                    onClick = {onChangeImg} >
                        {recipeCover}
                </div>
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                        <ul className = "list-group list-group-flush recipe-ingredients">
                            {ingridients}
                        </ul>
                </div>
                <div className = "recipe-form">
                    <label htmlFor="form-select" className="">Прием еды</label>
                    <select 
                        id = 'form-select' 
                        className = "form-select form-select-lg mb-3 recipe-form-select"
                        onChange = {e => onCategoryChange(e)} >
                            <option key = {0} value = '' ></option>
                        {
                           categoryItem
                        }
                    </select>
                    <button 
                        className = "btn btn-dark" 
                        type="button"
                        onClick = {onAddedToMenu}>Добавить</button>
                </div>
            </div>
            
        </div> */}
        </div>
        
    )
}

export default RecipeListItem;