import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		},
	button: {
		color: '#fff',
		backgroundColor: 'rgba(0,0,0,.5)',
		marginRight: 20,
		marginTop: 20
	}
}));

const AddNewIngredientModal = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

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

export default AddNewIngredientModal;
