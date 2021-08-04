import './basket.sass';

const Basket = () => {
    return(
        <div className = 'basket'>
            <h2>Day 1</h2>
            <ul>
                <li>img</li>
                <li>title</li>
                <li>text</li>
            </ul>
            <button><i class="bi bi-x-circle-fill"></i></button>
        </div>
    )
}

export default Basket;