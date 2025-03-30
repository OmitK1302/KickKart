import React, { useState, useRef } from 'react';
import Nav from '../components/Nav';
import { account, hide, key, show } from '../assets/icons';
import { Footer } from '../sections';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import Loader from '../components/Loader';


const RegisterScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPasswd, setShowCnfPasswd] = useState(false);
    const [passMatched, setPassMatched] = useState(false);
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [confirmPasswd, setConfirmPasswd] = useState("");

    const nameHandler = (e) => {
        setName(a => a = e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(a => a = e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswd(e.target.value);
        setPassMatched(e.target.value === confirmPasswd);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPasswd(e.target.value);
        setPassMatched(e.target.value === passwd);
    };

    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const togglePasswordVisibility = (field) => {
        if (field === "password") {
            setShowPassword((prev) => !prev);
            setTimeout(() => passwordRef.current?.focus(), 0);
        } else {
            setShowCnfPasswd((prev) => !prev);
            setTimeout(() => confirmPasswordRef.current?.focus(), 0);
        }
    };

    const [showErrorDialogBox, setShowErrorDialogBox] = useState(false);
    const doNothing = () => {
        setShowErrorDialogBox(false);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    const [Register, {isLoading}] = useRegisterMutation();
    const {userInfo} = useSelector((state) => state.auth);
    
    const registerHandler = async () => {
        try {
            const res = await Register({name, email, password: passwd}).unwrap();
            dispatch(setCredentials({...res}));
            navigate(redirect);
        } catch (error) {
            console.log(error);
            setShowErrorDialogBox(true);
        }
    }

    return (
        <>
            {/* <Nav /> */}
            <div className='w-full px-4 py-24 sm:pt-28 flex justify-center items-center font-montserrat'>
                <div className='w-96 p-12 border-x-2 mt-16'>
                    <h1 className='text-3xl mb-4 font-bold text-coral-red'>Sign Up</h1>

                    <form className='flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
                        <label className='flex flex-col gap-2'>
                            Name:
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='focus:outline-none bg-transparent w-full' type="text" required value={name} onChange={nameHandler} />
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            Email:
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='focus:outline-none bg-transparent w-full' type="email" required value={email} onChange={emailHandler} />
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            Password:
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red relative'>
                                <input
                                    ref={passwordRef}
                                    className='focus:outline-none bg-transparent w-full'
                                    type={showPassword ? "text" : "password"}
                                    value={passwd}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3"
                                    onClick={() => togglePasswordVisibility("password")}
                                >
                                    <img width={20} src={showPassword ? hide : show} alt="toggle password" />
                                </button>
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            Confirm Password: {passMatched ? "✅" : "❗"}
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red relative'>
                                <input
                                    ref={confirmPasswordRef}
                                    className='focus:outline-none bg-transparent w-full'
                                    type={showCnfPasswd ? "text" : "password"}
                                    value={confirmPasswd}
                                    onChange={handleConfirmPasswordChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3"
                                    onClick={() => togglePasswordVisibility("confirmPassword")}
                                >
                                    <img width={20} src={showCnfPasswd ? hide : show} alt="toggle confirm password" />
                                </button>
                            </div>
                        </label>

                        <button
                            className={`border-2 rounded-md text-white p-4 font-bold text-xl cursor-pointer transition ${
                                passMatched ? "bg-coral-red hover:bg-[#f05d4d]" : "bg-gray-400 cursor-default"
                            }`}
                            type="submit"
                            disabled={!passMatched}
                            onClick={registerHandler}
                            >
                                Register
                        </button>
                    </form>

                    <div className='p-2 mt-4'>
                        <p>Already a Customer? <span className='text-coral-red font-bold underline'><Link to='/login'>Login</Link></span></p>
                    </div>
                </div>
            </div>

            {isLoading && <Loader />}

            {/* <section className='bg-black padding'>
                <Footer />
            </section> */}

            {showErrorDialogBox && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 border-2 border-red-500 rounded-lg shadow-lg">
                        <p className="text-lg font-bold mb-4">⚠️ Invalid Email or Password❗</p>
                        <div className="flex justify-end gap-4">
                        <button onClick={doNothing} className="px-4 py-2 bg-coral-red text-white rounded-md">Ok</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RegisterScreen;
