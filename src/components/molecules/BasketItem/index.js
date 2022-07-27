import { Avatar, Badge, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import useStyles from './style';

const BasketItem = ({ item, onDeleteRecipe }) => {
  const classes = useStyles();

  return (
    <>
      {item ? (
        <Badge
          className={classes.badge}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          overlap="rectangular"
          color="primary"
          badgeContent={item.title}
        >
          <Avatar
            className={classes.avatar}
            alt="Фото рецепта"
            src={item.img}
          />
          <IconButton
            className={classes.button}
            aria-label="delete"
            color="secondary"
            // onClick={() => onDeleteRecipe(item)}
          >
            <DeleteIcon />
          </IconButton>
        </Badge>
      ) : (
        <Badge className={classes.badge}>
          <Avatar className={classes.avatar}>Не выбрано</Avatar>
        </Badge>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       addMenuItem,
//     },
//     dispatch
//   );

export default connect(mapStateToProps, null)(BasketItem);
