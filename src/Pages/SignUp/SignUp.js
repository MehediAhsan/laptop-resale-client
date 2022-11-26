import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully')

            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
                saveUser(data.name, data.email, data.role)
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        })
    }


    const saveUser = (name, email, role) => {
        const user = {name, email, role};

        fetch('http://localhost:5000/users', {
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
        <div className='w-96 mx-auto flex flex-col gap-2 shadow-lg p-7 rounded-lg my-20 border border-secondary'>
                <h1 className='text-2xl font-medium text-center pb-5'>SignUp</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {required:"Name is required"}, )} className="input input-bordered w-full" />
                        {errors.name && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {required:"Email Address is required"}, )} className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                         {...register("password", {
                            required:"Password is required",
                            minLength: { value: 6, message: "Password must be 6 charecters or longer" },
                            pattern: {
                                value: /(?=(.*[a-z]){2,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,})/,
                                message: "Must have a special charactes and number"
                            }
                        })}
                         className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Forgot Password ?</span>
                        </label>
                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Account Type</span>
                        </label>
                        <select {...register("role")} className="select select-bordered w-full max-w-xs">
                            <option value='buyer'>buyer</option>
                            <option value='seller'>seller</option>
                        </select>
                    </div> 
                    <input className='btn btn-secondary w-full' type="submit" value="SignUp" />
                    <div>
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account? <Link to="/login" className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-secondary btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
    );
};

export default SignUp;