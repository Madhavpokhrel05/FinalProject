import React, { Component } from 'react';
import Blog from './Blog';
import ViewPost from './ViewPost';
import AddApplication from './AddApplication';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";


const routes = [
{
path: "/AddApplication",
main: () =>
<AddApplication />
},
{
path: "/",
main: () =>
<ViewPost />
}
];

class Admin extends Component {
render() {
return (
<div>
<Router>
    <header>
        <div id="slide-out" className="side-nav blue-gradient fixed">
            <ul className="custom-scrollbar">
                <li className="logo-sn waves-effect py-3 mb-5">
                    <div className="text-center">
                        <a href="#" className="pl-0">
                            Application Tracker</a>
                    </div>
                </li>
                <li>
                    <Link to="/ViewPost" className="collapsible-header text-white waves-effect arrow-r ">
                        <i className="fas fa-eye mx-3 text-white "></i>View All Post
                    </Link>
                </li>
                   <li>
                    <Link to="/AddApplication" className="collapsible-header text-white waves-effect arrow-r responsive-font-size">
                        <i className="fas fa-plus mx-3 text-white "></i>Add Application
                    </Link>
                </li>
            </ul>
        </div>
        <nav className="navbar fixed-top navbar-expand-lg scrolling-navbar blue-gradient double-nav">
            <div className="float-left">
                <a href="#" data-activates="slide-out" className="button-collapse">
                    <i className="fas fa-bars"></i></a>
            </div>


            <div className="d-flex change-mode ml-auto">
                {/*Navbar links */}
                <ul className="nav navbar-nav nav-flex-icons ml-auto">
                    <li className="nav-item dropdown">
                        <a href="/" className="btn p-2 px-3 blue-gradient text-white waves-effect waves-light">Live Preview <i className="fas fa-eye ml-2"></i></a>
                    </li>
                </ul>
                {/*Navbar links */}
            </div>
        </nav>
        {/*Navbar */}
    </header>
    <main  className=" admin-left-margin">

      <Switch>
                {routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} children={<route.main />}
                />
                ))}

            </Switch>

    </main>
    <footer className="page-footer pt-0 mt-5 rgba-stylish-light">
    <div className="footer-copyright text-center py-3">
        <div className="container-fluid">
            Design By: <a href="https://madhavpokhrelportfolio.netlify.com/" target="_blank"> Madhav Pokhrel</a>
        </div>
    </div>
    </footer>

    </Router>
</div>
);
}
}
export default Admin;
