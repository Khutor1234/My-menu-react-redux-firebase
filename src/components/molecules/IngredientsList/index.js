import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from './style';

const IngredientsList = ({ ingredients }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {ingredients?.length > 0 ? (
        <List className={classes.list}>
          {ingredients.map((item) => {
            const { name, weight, id } = item;

            return (
              <ListItem key={id}>
                <CheckIcon />
                <ListItemText primary={name} />
                <Typography>{weight}г.</Typography>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Typography className={classes.text} align="center">
          Добавь рецепты в свой список и нажми "Расчитать продуктовую корзину"
        </Typography>
      )}
    </div>
  );
};

export default IngredientsList;
