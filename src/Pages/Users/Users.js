import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [deletingUser, setDeletingUser] = useState(null)
    const closeModal = () => {
        setDeletingUser(null)
    }
    const handleDeleteUser = user => {
        console.log(user);
        fetch(`https://mobile-reselling-store-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`User ${user.name} deleted successfully`);
                    const remaing = users.filter(usr => usr._id !== user._id);
                    setUsers(remaing);
                }
            })
    }
    useEffect(() => {
        fetch('https://mobile-reselling-store-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1>Total Users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.category}</td>
                                <td><label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-danger">Delete</label></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.name}. It can't be undone`}
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deletingUser}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>

    );
};

export default Users;