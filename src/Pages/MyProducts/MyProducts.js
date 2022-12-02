import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `https://mobile-reselling-store-server.vercel.app/myphones?email=${user?.email}`;
    const [myPhones, setMyPhones] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPhones(data))
    }, [])

    const handleDeleteProduct = product => {

        fetch(`https://mobile-reselling-store-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Product deleted successfully`);
                    const remaing = myPhones.filter(myphne => myphne._id !== product._id);
                    setMyPhones(remaing);
                }
            })
    }
    return (
        <div className='mx-6'>
            {console.log(myPhones)}
            <h1 className='text-3xl font-bold text-center mb-12'>My Products</h1>
            <h3 className='text-xl mb-8'>Total Products: {myPhones.length}</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    myPhones.map(myPhn => <MyProductsCard key={myPhn._id} myPhn={myPhn} handleDeleteProduct={handleDeleteProduct}></MyProductsCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;