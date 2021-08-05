import './recipe-list-item.sass';

const RecipeListItem = ({ recipe, onAddedToCart, onCategoryChange}) => {

    const { text, title, ingrid, category } = recipe;

    let ingridients;
        
    if(ingrid) {
        ingridients = ingrid.map((item) => {
            const {name, weight, id} = item;

            return (
                <li key = {id}>
                  	<div>{name}</div> 
                  	<span>{weight} г</span>
                </li>
            );
        });
    };
    
    let id = 1;

    return(
        <div className = 'recipe-item'>
            <div className="card border-primary mb-3">
                <div className = 'recipe-cover'></div>
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                        <p className="card-text">{text}</p>
                        <ul className = "list-group list-group-flush recipe-ingredients">
                            {ingridients}
                        </ul>
                </div>
                <div className = "recipe-form">
                    <label htmlFor="form-select" className="">Прием еды</label>
                    <select 
                        id = 'form-select' 
                        className = "form-select form-select-lg mb-3 recipe-form-select"
                        onChange = {e => onCategoryChange(e)} >
                            <option key = {0} value = '' ></option>
                        {
                            category.map((item) => {
                                return <option key = {id++} value = {item} >{item}</option>
                            })
                        }
                    </select>
                    <button className = "btn btn-dark" 
                        type="button"
                        onClick = {onAddedToCart}>Добавить</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default RecipeListItem;
