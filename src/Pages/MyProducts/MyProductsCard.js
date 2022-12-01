import React from 'react';

const MyProductsCard = ({ myPhn }) => {
    console.log(myPhn);
    const { image, conType, description, location, originalPrice, phone, postDate, productName, reselPrice, sellerName, useTime
    } = myPhn;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    <div className="badge badge-secondary">{conType}</div>
                </h2>
                <p>Original Price: {originalPrice}</p>
                <p>Resel Price: {reselPrice}</p>
                <p>Phone Used: {useTime} years</p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{phone}</div>
                    <div className="badge badge-outline">{postDate}</div>
                </div>
                <div className="card-actions justify-between">
                    <button className="btn btn-primary">Unsold</button>
                    <button className="btn btn-primary">Delete</button>
                </div>

            </div>
        </div>
    );
};

export default MyProductsCard;