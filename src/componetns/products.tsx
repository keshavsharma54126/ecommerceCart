import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'

const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fake-store-api.mock.beeceptor.com/api/products')
            console.log(response.data)
            setProducts(response.data)
        }
        fetchProducts()
    }, [])

    return (
        <div>
            <h1 className='text-2xl font-bold'>Products</h1>
            <div className='flex flex-wrap gap-4'>
                {products?.map((product: any) => (
                    <div key={product.product_id} className='bg-white shadow-md rounded-md p-4 max-w-sm'>
                        <img src={product.image} alt={product.name} className='w-40 h-40 object-cover rounded-t-md' />
                        <div className='p-4'>
                            <h2 className='text-lg font-bold'>{product.name}</h2>
                            <p className='text-sm text-gray-500'>{product.description}</p>
                            <p className='text-sm text-gray-500'>Price: ${product.price}</p>
                            <p className='text-sm text-gray-500'>Category: {product.category}</p>
                            <p className='text-sm text-gray-500'>Rating: {product.rating}</p>
                            <p className='text-sm text-gray-500'>Discount: {product.discount}%</p>
                            <p className='text-sm text-gray-500'>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
                        </div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick = {() => dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products