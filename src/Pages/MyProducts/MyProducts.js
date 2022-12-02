import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/myphones?email=${user?.email}`;
    const [myPhones, setMyPhones] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPhones(data))
    }, [])
    return (
        <div className='mx-6'>
            {console.log(myPhones)}
            <h1 className='text-3xl font-bold text-center mb-12'>My Products</h1>
            <h3 className='text-xl mb-8'>Total Products: {myPhones.length}</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    myPhones.map(myPhn => <MyProductsCard key={myPhn._id} myPhn={myPhn}></MyProductsCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;