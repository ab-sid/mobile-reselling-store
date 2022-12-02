import React, { useEffect, useState } from 'react';

const AllSeller = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch('https://mobile-reselling-store-server.vercel.app/seller')
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [])

    const handleMakeAdmin = (id) => {
        fetch(`https://mobile-reselling-store-server.vercel.app/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <h1>Total Sellers: {sellers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.category}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;
