import React, { useState } from 'react'
import FormHeader from './Shared/FormHeader';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault(e);

        const res = await fetch('/web/user/sign-in', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const result = await res.json();

        if (result.status) {
            window.alert("Login Successful!...");
            console.log("Login Successful!...");

            navigate('/profile');

        } else {
            window.alert("Invalid Inputs!...");
            console.log("Invalid Inputs!...");
            navigate('/login');
        }
    }

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    return (
        <div className="form-container form-container-login">
            <div className="form-content">
                <FormHeader name="Login" />
                <div className="form">
                    <form method="post">
                        <div className="input-field">
                            <div className="input-field-email">
                                <input className='email-field' type="email" name="email" id="email" required value={user.email} onChange={handleInputs} />
                                <label htmlFor="email">Email </label>
                            </div>
                            <div className="input-field-password">
                                <input className='password-field' type="password" name="password" id="password" required value={user.password} onChange={handleInputs} />
                                <label htmlFor="password">Password </label>
                            </div>
                            <div className="input-field-submit">
                                <input onClick={loginUser} className='submit-field' type="submit" value="Log-In" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-footer">
                    <p>No Account? <Link to='/signup'>Sign-Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;