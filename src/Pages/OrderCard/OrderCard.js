import React from 'react';

const OrderCard = ({ order }) => {
    const { productName, price } = order;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Name: {productName}</h2>
                <p>Price: {price}</p>

            </div>
        </div>
    );
};

export default OrderCard;