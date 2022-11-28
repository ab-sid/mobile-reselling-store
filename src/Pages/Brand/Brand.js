import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Brand = () => {
    const { _id } = useLoaderData()

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
        fetch('http://localhost:5000/addPhone', {
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
                }
            })
    }

    return (
        <div className='mx-6'>
            <h1 className='text-center text-3xl font-bold mb-6'>Add Your Products</h1>
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
                    <input type="email" name='sellerEmail' placeholder="Type your email" className="input input-bordered" />
                    <input type="text" name='conType' placeholder="Type your product condition" className="input input-bordered" />
                    <input type="text" name='phone' placeholder="Type your phone number" className="input input-bordered" />
                    <textarea className="textarea textarea-bordered" name='description' placeholder="Type product description"></textarea>
                </div>
                <input className='btn btn-success my-3 text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default Brand;