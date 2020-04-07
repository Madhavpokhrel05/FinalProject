import React from 'react';


export default class Header extends React.Component {
	render() {
		return (



    <header>
        {/* Navbar */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar white">
            <div className="container-fluid justify-content-center align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent-4">
                    <ul className="navbar-nav">

                        <li className="nav-item  ml-4 mb-0">
                            <a href="/" className="nav-link  waves-effect waves-light dark-grey-text font-weight-bold "> HOMEPAGE </a>

                        </li>

                        <li className="nav-item dropdown ml-4  mb-0">
                            <a href="#" className="nav-link  waves-effect waves-light dark-grey-text font-weight-bold" >ABOUT</a>

                        </li>
                        <li className="nav-item ml-4 mb-0">
                            <a className="nav-link waves-effect waves-light dark-grey-text font-weight-bold" href="#">CONTACT
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>

												<li className="nav-item  ml-4 mb-0">
                            <a href="/Admin" className="nav-link  waves-effect waves-light dark-grey-text font-weight-bold" > ADD APPLICATION </a>

                        </li>


                    </ul>
                </div>

                <ul className="navbar-nav ml-auto nav-flex-icons">

                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light" href="https://www.linkedin.com/in/madhavpokhrel/" target="_blank"  >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>

            </ul></div>

        </nav>
        {/* /.Navbar */}

    </header>



		);
	}
}
