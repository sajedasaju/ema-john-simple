import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
        let price = 0;
        {
            newCart.map(cartElement => {
                price += cartElement.price;
            })
        }
        cart.push(price);
        console.log(cart)
        console.log(newCart)
    }



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

                {/* <p>Total Price :{price}</p> */}
            </div>
        </div>
    );
};

export default Shop;