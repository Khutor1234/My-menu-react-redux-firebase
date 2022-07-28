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
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addRecipeItem } from '../../../store/actions/recipes';
import { DefaultButton } from '../../atoms';
import { SmallIngredientsList } from '../../molecules';
import useStyles from './style';

const RecipeModal = ({ open, onClose, id, addRecipeItem, updateRecipe }) => {
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

  const deleteIngred = (id) => {
    setIngredients(ingredients.filter((el) => el.id !== id));
  };

  const addToRecipe = () => {
    console.log({
      category: time,
      img: img,
      ingredients: ingredients,
      text: text,
      title: name,
    });

    // if (!!img || !!name || !!time || !!text) {
    //   setError(true);
    //   return;
    // }

    addRecipeItem({
      category: time,
      img: img,
      ingredients: ingredients,
      text: text,
      title: name,
    });
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
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Bonsai_IMG_6426.jpg"
                className={classes.recipeImg}
              />
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
            text="Добавить рецепт"
            onClick={addToRecipe}
          />
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addRecipeItem,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecipeModal);
