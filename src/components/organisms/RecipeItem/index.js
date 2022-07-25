import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';
import { useState } from 'react';
import { bindActionCreators } from 'redux';

import { addMenuItem } from '../../../store/actions/menu';
import useStyles from './style';

const RecipeItem = ({ recipe, addMenuItem }) => {
  const classes = useStyles();
  const { text, title, img, ingredients } = recipe;

  const [condition, setCondition] = useState('img');
  const [category, setCategory] = useState('');

  const changeCategory = (value) => {
    setCategory(value);
  };

  const renderHeader = () => {
    switch (condition) {
      case 'img':
        return (
          <CardMedia
            component="img"
            height="250"
            image={img}
            alt="Фото рецепта"
          />
        );
      case 'recipe':
        return (
          <Typography
            className={classes.recipeText}
            variant="body2"
            gutterBottom
          >
            {text}
          </Typography>
        );
      case 'ingred':
        return (
          <List className={classes.ingridList}>
            {ingredients.map((item) => {
              const { name, weight, id } = item;

              return (
                <ListItem key={id} className={classes.recipeItem}>
                  <CheckIcon />
                  <ListItemText primary={name} />
                  <Typography>{weight}г.</Typography>
                </ListItem>
              );
            })}
          </List>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      {renderHeader()}
      <ButtonGroup fullWidth size="small" className={classes.recipeButtons}>
        <Button
          className={classes.button}
          onClick={() => setCondition('ingred')}
        >
          Ингридиенты
        </Button>
        <Button
          className={classes.button}
          onClick={() => setCondition('recipe')}
        >
          Рецепт
        </Button>
        <Button className={classes.button} onClick={() => setCondition('img')}>
          Фото
        </Button>
      </ButtonGroup>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
      <CardActions>
        <FormControl variant="outlined" className={classes.recipeItemForm}>
          <InputLabel>Прием еды</InputLabel>
          <Select
            className={classes.recipeItemSelect}
            native
            onChange={(e) => changeCategory(e.target.value)}
            label="Прием еды"
            inputProps={{
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="Завтрак">Завтрак</option>
            <option value="Обед">Обед</option>
            <option value="Ужин">Ужин</option>
          </Select>
        </FormControl>
        <Button
          size="large"
          variant="outlined"
          className={classes.recipeItemButton}
          onClick={() =>
            addMenuItem({
              category: category,
              ingredients,
              img,
              title,
              text,
            })
          }
        >
          Добавить
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addMenuItem,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);
