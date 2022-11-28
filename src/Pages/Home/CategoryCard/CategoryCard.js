import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ cat }) => {
    const { _id, name, image } = cat;
    return (
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/brand/${_id}`}>
                        <button className="btn btn-primary">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;