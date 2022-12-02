import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import BrandPhone from '../BrandPhone/BrandPhone';
import useSeller from '../hooks/useSeller';

const Brand = () => {
    const { _id } = useLoaderData()
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [phones, setPhones] = useState([]);
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/phones?productCat=${_id}`)
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])

    const handleAddProducts = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const image = form.image.value;
        const location = form.location.value;
        const reselPrice = form.reselPrice.value;
        const originalPrice = form.originalPrice.value;
        const useTime = form.useTime.value;
        const postDate = form.postDate.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const conType = form.conType.value;
        const phone = form.phone.value;
        const description = form.description.value;

        const product = {
            productCat: _id,
            productName,
            image,
            location,
            reselPrice,
            originalPrice,
            useTime,
            postDate,
            sellerName,
            sellerEmail,
            conType,
            phone,
            description
        }
        fetch('http://localhost:5000/phones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Product add successfully')
                    form.reset();
                    navigate('/myproducts');
                }
            })
    }

    return (
        <div className='mx-6 mb-12'>
            <h1 className='text-center text-3xl font-bold mb-6'>All Products</h1>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    phones.map(phn => <BrandPhone key={phn._id} phn={phn} setOrder={setOrder}></BrandPhone>)
                }
            </div>
            {
                order &&
                <BookingModal order={order} setOrder={setOrder}></BookingModal>
            }
            <h1 className='text-center text-3xl font-bold my-16'>Add Your Products</h1>
            <form onSubmit={handleAddProducts}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" name='productName' placeholder="Type product name" className="input input-bordered" />
                    <input type="text" name='image' placeholder="Type image link only" className="input input-bordered" />
                    <input type="text" name='location' placeholder="Type your location" className="input input-bordered" />
                    <input type="text" name='reselPrice' placeholder="Type product resel price" className="input input-bordered" />
                    <input type="text" name='originalPrice' placeholder="Type product original price" className="input input-bordered" />
                    <input type="text" name='useTime' placeholder="Type year of use" className="input input-bordered" />
                    <input type="date" name='postDate' placeholder="Type post date" className="input input-bordered" />
                    <input type="text" name='sellerName' placeholder="Type your name" className="input input-bordered" />
                    <input type="email" name='sellerEmail' value={user?.email} className="input input-bordered" disabled />
                    <input type="text" name='conType' placeholder="Type your product condition" className="input input-bordered" />
                    <input type="text" name='phone' placeholder="Type your phone number" className="input input-bordered" />
                    <textarea className="textarea textarea-bordered" name='description' placeholder="Type product description"></textarea>
                </div>
                {
                    isSeller &&
                    <input className='btn btn-success my-3 text-white' type="submit" value="Add Product" />
                }
                {
                    !isSeller &&
                    <p className='text-success'>Your Accout must be a seller type account for adding any product!!</p>
                }
            </form>
        </div>
    );
};

export default Brand;