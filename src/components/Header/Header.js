import React from 'react';
import { Link } from 'react-router-dom';


export function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/">Mario `s nutrition</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="index.html">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about.html">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="post.html">Latest Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead bg-img-header" >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>The joy of eating</h1>
                                <span className="subheading">A Blog  by Dr Mario</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
