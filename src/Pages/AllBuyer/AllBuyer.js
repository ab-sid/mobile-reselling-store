import React, { useEffect, useState } from 'react';

const AllBuyer = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/buyer')
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [])
    return (
        <div>
            <h1>Total Buyers: {buyers.length}</h1>
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
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.category}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;