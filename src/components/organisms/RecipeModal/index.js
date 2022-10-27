import {
  Modal,
  Typography,
  TextField,
  FormLabel,
  TextareaAutosize,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  Grid,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DefaultButton } from '../../atoms';
import { SmallIngredientsList } from '../../molecules';
import { addRecipeItem, editRecipe } from '../../../store/actions/recipes';
import { recipesSelector } from '../../../store/selectors/recipes';
import useStyles from './style';

const RecipeModal = ({
  recipes,
  open,
  id,
  onClose,
  addRecipeItem,
  editRecipe,
}) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [ingredName, setIngredName] = useState('');
  const [ingredWeight, setIngredWeight] = useState('');
  const [time, setTime] = useState('');
  const [text, setText] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [name, img, ingredName, ingredWeight, time, text]);

  useEffect(() => {
    if (id && recipes.length > 0) {
      const recipe = recipes.find((el) => el.id === id);
      const { text, title, img, ingredients, category } = recipe;
      setText(text);
      setImg(img);
      setTime(category);
      setName(title);
      setIngredients(ingredients);
    }
  }, [id, recipes]);

  const deleteIngred = (id) => {
    setIngredients(ingredients?.filter((el) => el.id !== id));
  };

  const updateRecipe = () => {
    if (!img || !name || !time || !text) {
      setError(true);
      return;
    }

    id
      ? editRecipe(id, {
          category: time,
          img: img,
          ingredients: ingredients,
          text: text,
          title: name,
        })
      : addRecipeItem({
          category: time,
          img: img,
          ingredients: ingredients,
          text: text,
          title: name,
        });

    onClose();
    setError(false);
  };

  const addIngredient = () => {
    if (!!ingredWeight && !!ingredName) {
      setIngredients([
        ...ingredients,
        {
          id: Date.now(),
          name: ingredName,
          weight: ingredWeight,
        },
      ]);
      setIngredWeight('');
      setIngredName('');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <Typography className={classes.title}>Добавить новый рецепт</Typography>
        <form className={classes.form}>
          <Grid container spacing={1}>
            <Grid item sm={8}>
              <TextField
                label="Название рецепта"
                className={classes.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Путь к картинке"
                className={classes.img}
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Grid>
            <Grid item sm={4}>
              {img ? (
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src={img}
                  className={classes.recipeImg}
                />
              ) : (
                <div className={classes.imgWrapper}>
                  <AddAPhotoIcon />
                </div>
              )}
            </Grid>
          </Grid>

          <div className={classes.ingred}>
            <TextField
              label="Название ингридиента"
              className={classes.ingredName}
              onChange={(e) => setIngredName(e.target.value)}
              value={ingredName}
            />
            <TextField
              type="number"
              label="Вес(г.)"
              className={classes.weight}
              onChange={(e) => setIngredWeight(e.target.value)}
              value={ingredWeight}
            />
            <AddIcon
              fontSize="large"
              className={classes.icon}
              onClick={addIngredient}
            />
          </div>

          <SmallIngredientsList
            deleteIngred={deleteIngred}
            ingredients={ingredients}
          />
          <TextareaAutosize
            minRows={5}
            placeholder="Текст рецепта"
            className={classes.text}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormLabel component="legend" className={classes.radio}>
            Выберете прием еды
          </FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          >
            <FormControlLabel
              value="Завтрак"
              control={<Radio color="default" />}
              label="Завтрак"
            />
            <FormControlLabel
              value="Обед"
              control={<Radio color="default" />}
              label="Обед"
            />
            <FormControlLabel
              value="Ужин"
              control={<Radio color="default" />}
              label="Ужин"
            />
          </RadioGroup>

          {error && (
            <Typography className={classes.error}>
              Введите все данные
            </Typography>
          )}

          <DefaultButton
            className={classes.button}
            appearance="white"
            text={id ? 'Сохранить' : 'Добавить рецепт'}
            onClick={updateRecipe}
          />
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addRecipeItem,
      editRecipe,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecipeModal);
