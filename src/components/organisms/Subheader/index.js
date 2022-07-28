import { Container, Typography, Paper, Grid } from '@material-ui/core';
import { useState } from 'react';

// import { AddNewRecipeModal } from '../../modal';
import { DefaultButton } from '../../atoms';
import { RecipeModal } from '../index';
import useStyles from './style';

const Subheader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Paper
      className={classes.subheader}
      style={{
        backgroundImage: `url(https://media.istockphoto.com/photos/delicious-pizza-with-ingredients-and-spices-picture-id924476838?k=6&m=924476838&s=612x612&w=0&h=ORCMVPZ_h5uZuZWG35jtw2ovGhGTdb-bRh3LW3DQNaE=)`,
      }}
    >
      <Container fixed>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.content}>
              <Typography variant="h6" color="inherit" paragraph>
                Собери свое идеальное меню.
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                Добавляй в корзину рецепты и мы расчитаем твою продуктовую
                корзину на неделю. В каждом рецепте грамовки указаны на одну
                порцию.
              </Typography>
              <Grid container>
                <Grid item>
                  <DefaultButton
                    appearance="active"
                    className={classes.button}
                    text="Добавить новый рецепт"
                    onClick={() => setOpen(true)}
                  />
                  <RecipeModal open={open} onClose={() => setOpen(false)} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Subheader;
