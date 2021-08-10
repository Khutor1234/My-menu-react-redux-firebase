import './recipe-list-item.sass';

const RecipeListItem = ({ recipe, onAddedToMenu, onCategoryChange, onChangeImg}) => {

    const { text, title, ingrid, category, img } = recipe;

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

    let categoryItem;

    if(category){
        categoryItem =  category.map((item) => {
            return <option key = {id++} value = {item} >{item}</option>
        })
    }

    const recipeCover = img ? <p className="card-text">img</p> :
        <p className="card-text">{text}</p>


    return(
        <div className = 'recipe-item'>
            <div className="card border-primary mb-3">
                <div className = 'recipe-cover'
                    onClick = {onChangeImg} >
                        {recipeCover}
                </div>
                    <div className="card-header">{title}</div>
                    <div className="card-body">
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
                           categoryItem
                        }
                    </select>
                    <button 
                        className = "btn btn-dark" 
                        type="button"
                        onClick = {onAddedToMenu}>Добавить</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default RecipeListItem;