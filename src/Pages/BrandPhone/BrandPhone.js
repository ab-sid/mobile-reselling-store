import React from 'react';

const BrandPhone = ({ phn }) => {
    const { image, conType, description, location, originalPrice, phone, postDate, productName, reselPrice, sellerName, useTime } = phn;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    <div className="badge badge-secondary">{conType}</div>
                </h2>

                <p>Location: {location}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Resel Price: {reselPrice}</p>
                <p>Phone Used: {useTime} years</p>
                <h3>Seller Name: {sellerName}</h3>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{phone}</div>
                    <div className="badge badge-outline">{postDate}</div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default BrandPhone;