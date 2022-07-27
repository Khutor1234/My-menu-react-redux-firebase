import { Typography, TextField, Grid } from '@material-ui/core';

import { DefaultButton } from '../../atoms';
import useStyles from './style';

const Counter = ({ countIngredients, changeValue, value }) => {
  const classes = useStyles();

  return (
    <>
      <DefaultButton
        text="Расчитать продуктовую корзину"
        appearance="black"
        onClick={countIngredients}
      />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography className={classes.label}>на</Typography>
        </Grid>
        <Grid item>
          <TextField
            type="number"
            value={value}
            className={classes.input}
            onChange={(e) => changeValue(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.label}>человек</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Counter;
