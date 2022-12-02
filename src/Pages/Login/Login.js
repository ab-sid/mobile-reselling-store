import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const Login = () => {

    const { register, formState: { error }, handleSubmit } = useForm();
    const { user, signIn, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const token = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user?.displayName, user?.email);
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const saveUser = (name, email, category = 'buyer') => {
        const user = { name, email, category };
        fetch('https://mobile-reselling-store-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }

    return (
        <div className='flex justify-center items-center my-8'>
            <div>
                <h2 className='text-3xl text-center font-bold mb-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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

                        <label className="label">
                            <span className="label-text">forget password?</span>
                        </label>
                    </div>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    {
                        loginError && <p className='color-red-600'>{loginError}</p>
                    }
                </form>
                <p>New to Mobile Reselling Store? <Link className='text-primary' to='/signup'>Sign Up</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline  w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div >
    );
};

export default Login;