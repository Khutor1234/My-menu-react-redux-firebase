import './recipe-ingredients.sass';

const RecipeIngredients = ({ingrid}) => {
    let elements;
        
    if(ingrid) {
        elements = ingrid.map((item) => {
            const {name, weight, id} = item;

            return (
                <li key = {id}>
                  	<div>{name}</div> 
                  	<span>{weight} г</span>
                </li>
            );
        });
    };

    return(
        <ul className = "list-group list-group-flush recipe-ingredients">
        	{elements}
      	</ul>
    )
}

export default RecipeIngredients;