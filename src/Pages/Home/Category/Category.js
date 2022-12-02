import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://mobile-reselling-store-server.vercel.app/mobileBrands')
            .then(data => data.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-3xl text-center font-bold'>Category</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    categories.map(cat => <CategoryCard key={cat._id} cat={cat}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;