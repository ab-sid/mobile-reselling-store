import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import OrderCard from '../OrderCard/OrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setMyOrders] = useState([])
    useEffect(() => {
        fetch(`https://mobile-reselling-store-server.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    return (
        <div className='ml-4'>
            <h1 className='text-3xl font-bold text-center mb-8'>Your Total Orders are: {orders.length}</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    orders.map(order => <OrderCard key={order._id} order={order}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;