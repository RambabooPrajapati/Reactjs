import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import './signup.css';
import { Link } from 'react-router-dom';

const formatDateToDDMMYYYY = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
};

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        dob: "",
        mobile: "",
        image: null,  // Use null instead of an empty string for files
    });
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        // Clear error for the field being edited
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: ""
            }));
        }
    };

    // // Maximum file size in bytes (2 MB)
    // const MAX_FILE_SIZE = 2 * 1024 * 1024;
    // // Allowed file types
    // const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

    // Handle change for file input
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];

    //     if (file) {
    //         if (!ALLOWED_TYPES.includes(file.type)) {
    //             setErrors((prevErrors) => ({
    //                 ...prevErrors,
    //                 image: 'Invalid file type. Only JPEG, PNG, and GIF are allowed.'
    //             }));
    //             setFormData((prevData) => ({
    //                 ...prevData,
    //                 image: null
    //             }));
    //             return;
    //         }

    //         if (file.size > MAX_FILE_SIZE) {
    //             setErrors((prevErrors) => ({
    //                 ...prevErrors,
    //                 image: 'File size exceeds 2 MB limit.'
    //             }));
    //             setFormData((prevData) => ({
    //                 ...prevData,
    //                 image: null
    //             }));
    //             return;
    //         }

    //         setErrors((prevErrors) => ({
    //             ...prevErrors,
    //             image: ''
    //         }));
    //         setFormData((prevData) => ({
    //             ...prevData,
    //             image: file
    //         }));
    //     }
    // };

    const validate = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";
        }

        if (!formData.dob) {
            newErrors.dob = "Date of birth is required";
        }

        if (!formData.mobile) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile number must be 10 digits";
        }

        if (!formData.image) {
            newErrors.image = "Image is required";
        }

        return newErrors;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Convert date to dd/mm/yyyy format for display
            const formattedDOB = formatDateToDDMMYYYY(formData.dob);
            console.log({ ...formData, dob: formattedDOB });
            setFormData({
                username: "",
                email: "",
                password: "",
                dob: "",
                mobile: "",
                image: null // Reset image to null
            });
            setErrors({});
        }
    };

    return (
        <>
            <div className='container'>
                <div className='signup_container'>
                    <VscAccount className='login_icons' />
                    <h2>Log in</h2>
                    <form onSubmit={submitHandler} className='formStyle'>
                        <div className='email'>
                            <label htmlFor='email'>Email </label>
                            <span style={{ color: 'red' }}>*</span>
                            <input
                                className='email_input'
                                type='email'
                                id='email'
                                value={formData.email}
                                name='email'
                                onChange={onChangeHandler}
                            />
                            <p style={{ marginLeft: '100px', marginBottom: "10px" }}>
                                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

                            </p>
                        </div>
                        <div className='password'>
                            <label htmlFor='password'>Password </label>
                            <span style={{ color: 'red' }}>*</span>
                            <input
                                className='password_input'
                                type='password'
                                id='password'
                                value={formData.password}
                                name='password'
                                onChange={onChangeHandler}
                            />
                            <p style={{ marginLeft: '100px', marginBottom: "10px" }}>
                                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                            </p>
                        </div>
                        <button className='button' type='submit'>Login</button>
                    </form>
                    <span>Don't have an account?<span> <Link style={{ color: "blue", marginLeft: '5px', textDecoration: 'none' }} to='/signup'>Sign up</Link></span></span>
                </div>
            </div>
        </>
    );
};

export default Login;
