import React from 'react';
import img from '../../../assets/trust.jpg';

const About = () => {
    return (
        <div className='my-8'>
            <h1 className='text-3xl font-bold text-center text-primary mb-8'>About Us</h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Belive & Trust</h1>
                        <p className="py-6">We Belive in our products. Your Belive and Trust is our first priority.We supply our best products for your priceless love...</p>
                        <button className="btn btn-primary">Know More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;