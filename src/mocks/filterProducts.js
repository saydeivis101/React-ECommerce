import { useContext, useState } from 'react'
import { FiltersContext } from '../context/FiltersProvider';
import {products as InitialState} from './products.json'

export const filterProducts = () => {

    const {filters} = useContext(FiltersContext);
    const [products] = useState(InitialState);

    const filterProducts = (products)=>{
        return products.filter(product =>
            {
                return product.price >= filters.minPrice 
                && (filters.category == product.category || filters.category == 'all')
            }
            )
    }


    const filtedProducts = filterProducts(products);

    return {
        products: filtedProducts,
    }
}
