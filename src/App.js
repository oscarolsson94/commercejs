import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

// grab commerce instance which will handle entire backend
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App;
