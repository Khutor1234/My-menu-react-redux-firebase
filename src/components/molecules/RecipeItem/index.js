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
  IconButton,
  Grid,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';

import { RecipeModal } from '../../organisms';
import { DefaultButton } from '../../atoms';
import useStyles from './style';

const RecipeItem = ({ recipe, addMenuItem, deleteRecipeItem, email }) => {
  const classes = useStyles();
  const { text, title, img, ingredients, id } = recipe;

  const [condition, setCondition] = useState('img');
  const [category, setCategory] = useState('');
  const [warning, setWarning] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState(null);

  const checkAdding = () => {
    !category
      ? setWarning('Добавте время прийома еды')
      : addMenuItem({
          category,
          ingredients,
          img,
          title,
          text,
        });
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
          <Typography className={classes.text} variant="body2" gutterBottom>
            {text}
          </Typography>
        );
      case 'ingred':
        return (
          <List className={classes.ingredList}>
            {ingredients.map((item) => {
              const { name, weight, id } = item;

              return (
                <ListItem key={id} className={classes.ingred}>
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
      <ButtonGroup fullWidth size="small" className={classes.buttons}>
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
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={7}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          {email === 'khutornaalexandra@gmail.com' && (
            <Grid item xs="auto">
              <IconButton onClick={() => deleteRecipeItem(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  setOpen(true);
                  setModalId(id);
                }}
              >
                <EditIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </CardContent>
      <CardActions>
        <FormControl variant="outlined" className={classes.form}>
          <InputLabel>Прием еды</InputLabel>
          <Select
            className={classes.select}
            native
            onChange={(e) => {
              setWarning(null);
              setCategory(e.target.value);
            }}
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
        <DefaultButton
          text="Добавить"
          appearance="white"
          onClick={checkAdding}
        />
      </CardActions>

      {warning && (
        <Typography className={classes.warning}>{warning}</Typography>
      )}

      <RecipeModal id={modalId} open={open} onClose={() => setOpen(false)} />
    </Card>
  );
};

export default RecipeItem;
