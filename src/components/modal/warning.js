import { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import useStyles from './style';

const Warning = ({warning, errorAdding}) => {
  const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        if(warning){
            setOpen(true);
        }
    }, [warning]);

    const header = errorAdding ? 'Упс, что-то пошло не так ': 'Поздравляю'

    const body = (
        <div className={classes.paper}>
        <h2 id="simple-modal-title">{header}</h2>
        <p id="simple-modal-description">
            {warning}
        </p>
        </div>
    );

    return (
        <div>
        <Modal
            open={open}
            onClose = {() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                {body}
        </Modal>
        </div>
    );
}

export default Warning;