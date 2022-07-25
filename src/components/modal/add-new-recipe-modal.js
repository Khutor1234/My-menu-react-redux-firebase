import { Modal } from '@material-ui/core';
import { useState } from 'react';

import { DefaultButton } from '../molecules';
import RecipeForm from '../recipe-form';
import useStyles from './style';

const AddNewRecipeModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DefaultButton
        appearance="active"
        className={classes.button}
        text="Добавить новый рецепт"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <RecipeForm />
        </div>
      </Modal>
    </div>
  );
};

export default AddNewRecipeModal;
