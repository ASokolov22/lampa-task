import React from 'react';

const CartItem = ({item, addToCart, removeFromCart}) => {
    return (
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
                <img src={item.thumbnailUrl} alt={item.id}/>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
                <div>
                    <p>{item.title}</p>
                </div>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => removeFromCart()}
                    >-</button>
                    <button type="button" className="btn btn-secondary" disabled={true}>{item.isInCart}</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => addToCart()}
                    >+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
