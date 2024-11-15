import './App.css';

function Cart({ cartImg, count, remove, removeAll }) {
    const removeClick = ()=> {
        remove(cartImg);
    }
    const removeAllClick = ()=> {
        removeAll(cartImg);
    }

    return (
        <>
            <div className="item-container">
                {cartImg && <img className="wantbuy-img" src={cartImg} alt="장바구니에 담긴 상품" />}
                <div className="num-button">
                    <span className="counter">{count}</span>
                    <div className="button-container">
                        <button onClick={removeClick} id="remove">1개 제거</button>
                        <button onClick={removeAllClick}id="removeall">전부 제거</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart