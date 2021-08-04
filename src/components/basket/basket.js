import { connect } from 'react-redux';

import './basket.sass';

const Basket = ({items, onDelete}) => {
    return(
        <div className = 'basket'>
            <h2>Day 1</h2>
            <ul>
                {
                    items.map((item) => {
                        const {title, recipeId} = item;
                        return(
                            <li key = {recipeId}>
                                <div>img</div>
                                <span>{title}</span>
                                <button
                                    onClick = {() => onDelete(recipeId)} ><i className="bi bi-x-circle-fill"></i></button>
                            </li>
                        )
                    })    
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({cartItems}) => {
    console.log(cartItems)
    return{
        items: cartItems
    }
}

const mapDispatchToProps = () => {
    return {
        onDelete: (recipeId) => {
            console.log(recipeId)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);