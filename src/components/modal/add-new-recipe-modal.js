import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';
import { useState } from 'react';
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

	const body = (
		<div className={classes.paper}>
			<h2 id="simple-modal-title">Text in a modal</h2>
			<p id="simple-modal-description">
				Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
			</p>
		</div>
	);

	return (
		<div>
			<Button  variant='contained' className={classes.button} onClick={handleOpen}>Добавить новый рецепт</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}

export default AddNewRecipeModal;