import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10)


    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                // console.log(data.count)
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])


    const handleAddToCart = (selectedProduct) => {
        // console.log("selected product ", selectedProduct);
        let newCart;
        const exist = cart.find(product => product._id === selectedProduct._id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            /*  console.log("Cart product ", cart);
             console.log("Rest product from cart which does not match with id", rest); */
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
            // console.log("exixt one :", exist)
        }
        setCart(newCart);
        addToDb(selectedProduct._id);

        // console.log(newCart)
    }



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>

                {/* <p>Total Price :{price}</p> */}
            </div>
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
                {/* {size} */}
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

            </div>
        </div>
    );
};

export default Shop;