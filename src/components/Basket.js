import React from 'react'

const Basket = ({cartItems, onAdd, onRemove}) => {
    //subtotal
    const itemPrice = cartItems.reduce((a, c) =>a + c.price * c.qty, 0)
    const taxPrice= itemPrice * 0.14
    const shippingPrice = itemPrice > 2000 ? 0:50
    const totalPrice = itemPrice + taxPrice + shippingPrice
    return (
        <div className="card">
             <div className="card-header bg-danger text-white">
                <h3 className="card-title">Carts Items</h3>
            </div>
            <div className="card-body">
                
            <h4>{cartItems.length === 0 && <p>Cart is Empty</p>}</h4>
            {cartItems.map((item) =>(
                <div key={item.id} className="row" >
                    <div className="col-4">{item.name}</div>
                    <div className="col-4"> 
                        <button onClick={()=>onAdd(item)} className="btn btn-danger">+</button> &nbsp;
                        <button onClick={()=>onRemove(item)} className="btn btn-danger">-</button>
                    </div>

                    <div className="col-4">
                        {item.qty} x ${item.price.toFixed(2)}
                        </div>

                </div>
            ))}

            {cartItems.length !==0 && (
                <>
                <hr/>
                <div className="row">
                    <div className="col-4">Items Price</div>
                    <div className="col-6">{itemPrice.toFixed(2)}</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">Tax Price</div>
                    <div className="col-6">{taxPrice.toFixed(2)}</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">Shipping Price</div>
                    <div className="col-6">{shippingPrice.toFixed(2)}</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">Total Price</div>
                    <div className="col-6">{totalPrice.toFixed(2)}</div>
                </div>
                </>
            )}
            </div>
        </div>
    )
}

export default Basket
