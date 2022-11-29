import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { register, formState: { error }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const handleSignup = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h2 className='text-3xl text-center font-bold mb-6'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <select {...register("category", { required: true })} className="input input-bordered w-full max-w-xs">
                        <option disabled selected>Select Users</option>
                        <option value='user'>User</option>
                        <option value='seller'>Seller</option>
                    </select>

                    <input className='btn btn-accent w-full' value='SignUp' type="submit" />
                </form>
                <p>Already have an account? <Link className='text-primary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline  w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div >
    );
};

export default Signup;