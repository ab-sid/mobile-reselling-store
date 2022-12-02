import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import OrderCard from '../OrderCard/OrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setMyOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    return (
        <div>
            <h1>Total Orders: {orders.length}</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    orders.map(order => <OrderCard key={order._id} order={order}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;