import './App.css';

function Item({itemImg, itemName, itemDetails, priceText, onAddToCart}) {
    const handleClick = ()=> {
        onAddToCart(itemImg);
    }


    return (
        <>
            <div className="item">
                <img className="item-img" src={itemImg} alt={itemName}></img>
                <button onClick={handleClick}>
                    <img className="cart" src={`${process.env.PUBLIC_URL}/cart.png`} alt=""></img>
                </button>
                <div className="item-name"><h3>{itemName}</h3></div>
                <div className="item-details">{itemDetails}</div>
                <div className="item-price">
                    <span className="price">판매가</span>
                    <span className="price-text"><h3>{priceText}</h3></span>
                    <span className="won">원</span>
                </div>
            </div>
        </>
    )
}

export default Item;