import './HeaderLoginMobile.scss';
import React, { useState } from 'react';

function HeaderLoginMobile({ setUser }) {

    const [ formVisible, setFormVisible ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        setUser({
            name: 'Test User'
        })
    };

    const handleChange = e => {
        console.log(e.target.value);
    };

    const resetForm = () => {
        console.log('form reset');
    }

    return (
        <div className="header-login-mob">
            <button onClick={() => setFormVisible(!formVisible)} className="header-login-mob__btn" type="button">Login</button>
            {formVisible &&
            <form className="header-login-mob__form" onSubmit={handleSubmit}>
                <label className="header-login-mob__label" htmlFor="email">
                    <input className="header-login-mob__input" type="text" placeholder="email..." name="email"onChange={handleChange}/>
                </label>
                <label className="header-login-mob__label" htmlFor="password">
                    <input className="header-login-mob__input" type="text" placeholder="password..." name="password" onChange={handleChange}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={resetForm} type="button">Clear</button>
                </div>
            </form>
            }
        </div>
    );

}

export default HeaderLoginMobile;