import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const MyProductsCard = ({ myPhn, handleDeleteProduct }) => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    console.log(myPhn);
    const { image, conType, originalPrice, phone, postDate, productName, reselPrice, sellerName, useTime
    } = myPhn;
    const closeModal = () => {
        setDeletingProduct(null)
    }

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
                <p>Phone: {phone}</p>


                <div className="card-actions justify-end mb-6">
                    <div className="badge badge-outline">available</div>
                    <div className="badge badge-outline">{postDate}</div>
                </div>
                <div className="card-actions justify-between">
                    <button className="btn btn-sm btn-primary">Unsold</button>
                    <label onClick={() => setDeletingProduct(myPhn)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Delete</label>
                </div>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.productName}. It can't be undone`}

                    successButtonName="Delete"
                    modalData={deletingProduct}
                    successAction={handleDeleteProduct}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProductsCard;