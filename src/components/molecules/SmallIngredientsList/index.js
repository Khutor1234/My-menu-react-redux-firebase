import { Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import useStyles from './style';

const SmallIngredientsList = ({ ingredients, deleteIngred }) => {
  const classes = useStyles();

  if (ingredients?.length < 1) {
    return null;
  }

  return (
    <>
      <Typography className={classes.label}>Ингридиенты:</Typography>
      <ul className={classes.ingredList}>
        {ingredients?.map((item) => {
          return (
            <li key={item.id} className={classes.ingredItem}>
              <p className={classes.ingredName}>
                {item.name}({item.weight}г.)
              </p>
              <HighlightOffIcon
                fontSize="small"
                className={classes.icon}
                onClick={() => deleteIngred(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SmallIngredientsList;
