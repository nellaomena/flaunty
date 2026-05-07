import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        setUser(loggeduser);
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <section class="row">
            <div class="col-md-12">

                {/* <!-- a nav with nav bar content  --> */}

                <nav class="navbar navbar-expand-md bg-light">
                    {/* //eslint-disable-next-line */}
                    <p className='text-dark'>FlauntyFlorals🪷
                        <img src="images/flow.jpg" alt="logo" />
                    </p>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* 
                    <!-- a division containing the links  --> */}

                    <div class="collapse navbar-collapse" id="navbarcollapse">

                        <div class="navbar-nav">
                            <a href="/" class="nav-link ">Home</a>
                            <a href="/addproduct" class="nav-link">Add Product</a>
                            {user ? (
                                <>
                                    <span className="nav-link">Welcome {user.username}</span>
                                    <button onClick={logout} className='btn btn-danger'>Logout</button>
                                </>
                            ) : (
                                <>
                                    <a href="/signin" className='nav-link'>Signin</a>
                                    <a href="/signup" className='nav-link'>Signup</a>
                                </>
                            )}

                        </div>
                    </div>
                </nav>
            </div>
        </section>

    )
}

export default Navbar
