import {Modal} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { useState } from 'react';
import useStyles from './style';
import RecipeForm from '../recipe-form';

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
			<Button  variant='contained' className={classes.button} onClick={handleOpen}>Добавить новый рецепт</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
				>
				<div className={classes.paper}>
					<RecipeForm/>
				</div>
			</Modal>
		</div>
	);
}

export default AddNewRecipeModal;