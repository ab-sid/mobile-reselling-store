import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ order, setOrder }) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { productName, reselPrice } = order;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const productName = form.productName.value;
        const reselPrice = form.reselPrice.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            email,
            productName: productName,
            price: reselPrice,
            phone,
            location
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setOrder(null)
                    toast.success('Booking Confirmed')
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3 grid-cols-1'>
                        <input type="email" name='email' value={user?.email} className="input input-bordered w-full" disabled />
                        <input type="text" name='productName' value={productName} className="input input-bordered w-full" disabled />
                        <input type="text" name='reselPrice' value={reselPrice} className="input input-bordered w-full" disabled />
                        <input type="text" name='phone' placeholder="Type phone number" className="input input-bordered w-full" />
                        <input type="text" name='location' placeholder="Type location" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn btn-success w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;