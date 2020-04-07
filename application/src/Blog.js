import React, {Component} from 'react';
import Post from './Post'
import Footer from './Footer'
import Header from './Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div>
                  <Router>


<Header/>


    {/*Main layout*/}
    <main class="p-0">
<div className="container-fluid">
        {/*Intro*/}
        <section className="pt-5 mt-5">
            <div className="container-fluid">

                {/*Excerpt*/}

                <h1 className="text-center dark-grey-text pb-3">
                    <strong>Application </strong> Trackers</h1>

                <p className="grey-text text-center mb-4 text-uppercase spacing">Welcome To Application Trackers. </p>

                {/*Grid row*/}
                <div className="row flex-center">

                    {/*Grid column*/}
                    <div className="col-md-10 col-xl-5">

                        <p className="grey-text text-center">
                            <em>"This is the application where is track, which jobs that you already applied to. This application will make your
                            job tracking easier."</em>
                        </p>

                    </div>
                    {/*Grid column*/}

                </div>
                {/*Grid row*/}

            </div>
        </section>
        {/*/Intro*/}


    {/*Blog section*/}
        <section>
            <div className="container-fluid grey lighten-4">
                <hr className="my-5" />
                <div className="container">

                    {/*Blog*/}
                    <div className="row mt-5 pt-3">
      <div className="col-lg-8 col-12 mt-1 mx-lg-4">
                    <Post />
                    <Post />
                    <Post />


                            {/*Pagination dark grey*/}
                            <nav className="mb-5 pb-2">
                                <ul className="pagination pg-darkgrey flex-center">
                                    {/*Arrow left*/}
                                    <li className="page-item">
                                        <a className="page-link waves-effect waves-effect" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>

                                    {/*Numbers*/}
                                    <li className="page-item active">
                                        <a className="page-link waves-effect waves-effect">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">5</a>
                                    </li>

                                    {/*Arrow right*/}
                                    <li className="page-item">
                                        <a className="page-link waves-effect waves-effect" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            {/*Pagination dark grey*/}



                </div>
                        {/*Sidebar*/}
                        <div className="col-lg-3 col-12 mt-1">

                            {/*/.Card*/}

                            {/* Section: Featured posts */}
                            <section className="section widget-content mt-5">

                                {/*/ Card */}
                                <div className="card card-body pb-0">
                                    <div className="single-post">

                                        <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
                                            <strong>POPULAR JOBS APPLICATIONS</strong>
                                        </p>

                                        {/* Grid row */}
                                        <div className="row mb-4">
                                            <div className="col-5">

                                                {/* Image */}
                                                <div className="view overlay">
                                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo13.jpg" className="img-fluid z-depth-1 rounded-0" alt="sample image" />
                                                    <a>
                                                        <div className="mask waves-light waves-effect waves-light"></div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Excerpt */}
                                            <div className="col-7">
                                                <h6 className="mt-0 font-small">
                                                    <a>
                                                        <strong>Title of the news</strong>
                                                    </a>
                                                </h6>

                                                <div className="post-data">
                                                    <p className="font-small grey-text mb-0">
                                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                                </div>
                                            </div>
                                            {/*/ Excerpt */}
                                        </div>
                                        {/*/ Grid row */}
                                    </div>

                                    <div className="single-post">
                                        {/* Grid row */}
                                        <div className="row mb-4">
                                            <div className="col-5">

                                                {/* Image */}
                                                <div className="view overlay">
                                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo12.jpg" className="img-fluid z-depth-1 rounded-0" alt="sample image" />
                                                    <a>
                                                        <div className="mask waves-light waves-effect waves-light"></div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Excerpt */}
                                            <div className="col-7">
                                                <h6 className="mt-0 font-small">
                                                    <a>
                                                        <strong>Title of the news</strong>
                                                    </a>
                                                </h6>

                                                <div className="post-data">
                                                    <p className="font-small grey-text mb-0">
                                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                                </div>
                                            </div>
                                            {/*/ Excerpt */}
                                        </div>
                                        {/*/ Grid row */}
                                    </div>

                                    <div className="single-post">
                                        {/* Grid row */}
                                        <div className="row mb-4">
                                            <div className="col-5">

                                                {/* Image */}
                                                <div className="view overlay">
                                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo10.jpg" className="img-fluid z-depth-1 rounded-0" alt="sample image" />
                                                    <a>
                                                        <div className="mask waves-light waves-effect waves-light"></div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Excerpt */}
                                            <div className="col-7">
                                                <h6 className="mt-0 font-small">
                                                    <a>
                                                        <strong>Title of the news</strong>
                                                    </a>
                                                </h6>

                                                <div className="post-data">
                                                    <p className="font-small grey-text mb-0">
                                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                                </div>
                                            </div>
                                            {/*/ Excerpt */}
                                        </div>
                                        {/*/ Grid row */}
                                    </div>

                                    <div className="single-post">
                                        {/* Grid row */}
                                        <div className="row mb-4">
                                            <div className="col-5">

                                                {/* Image */}
                                                <div className="view overlay">
                                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo15.jpg" className="img-fluid z-depth-1 rounded-0" alt="sample image" />
                                                    <a>
                                                        <div className="mask waves-light waves-effect waves-light"></div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Excerpt */}
                                            <div className="col-7">
                                                <h6 className="mt-0 font-small">
                                                    <a>
                                                        <strong>Title of the news</strong>
                                                    </a>
                                                </h6>

                                                <div className="post-data">
                                                    <p className="font-small grey-text mb-0">
                                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                                </div>
                                            </div>
                                            {/*/ Excerpt */}
                                        </div>
                                        {/*/ Grid row */}
                                    </div>

                                    <div className="single-post">
                                        {/* Grid row */}
                                        <div className="row mb-4">
                                            <div className="col-5">

                                                {/* Image */}
                                                <div className="view overlay">
                                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo9.jpg" className="img-fluid z-depth-1 rounded-0" alt="sample image" />
                                                    <a>
                                                        <div className="mask waves-light waves-effect waves-light"></div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Excerpt */}
                                            <div className="col-7">
                                                <h6 className="mt-0 font-small">
                                                    <a>
                                                        <strong>Title of the news</strong>
                                                    </a>
                                                </h6>

                                                <div className="post-data">
                                                    <p className="font-small grey-text mb-0">
                                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                                </div>
                                            </div>
                                            {/*/ Excerpt */}
                                        </div>
                                        {/*/ Grid row */}

                                    </div>
                                </div>
                            </section>
                            {/*/ Section: Featured posts */}



                            {/* Section: Categories */}
                            <section className="section mb-5">

                                {/* Card */}
                                <div className="card card-body pb-0">
                                    <div className="single-post">

                                        <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
                                            <strong>APPLICATIONS CATEGORIES</strong>
                                        </p>

                                        <ul className="list-group my-4">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <a className="">
                                                    <p className="mb-0">Frontend</p>
                                                </a>
                                                <span className="badge teal badge-pill font-small">4</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <a className="">
                                                    <p className="mb-0">Backend</p>
                                                </a>
                                                <span className="badge teal badge-pill">2</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <a className="">
                                                    <p className="mb-0">Full Stack</p>
                                                </a>
                                                <span className="badge teal badge-pill">1</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <a className="">
                                                    <p className="mb-0">Mern Stack</p>
                                                </a>
                                                <span className="badge teal badge-pill">2</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <a className="">
                                                    <p className="mb-0">JavaScript</p>
                                                </a>
                                                <span className="badge teal badge-pill">1</span>
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                            </section>
                            {/* Section: Categories */}

                            {/*Featured posts*/}
                            <section className="mb-5">

                                {/*Grid row*/}
                                <div className="row mt-4">
                                    {/*Grid column*/}
                                    <div className="col-md-12">

                                        {/*Carousel Wrapper*/}
                                        <div id="carousel-example-4" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                                            {/*Indicators*/}
                                            <ol className="carousel-indicators">
                                                <li data-target="#carousel-example-4" data-slide-to="0" className=""></li>
                                                <li data-target="#carousel-example-4" data-slide-to="1" className="active"></li>
                                                <li data-target="#carousel-example-4" data-slide-to="2" className=""></li>
                                            </ol>
                                            {/*Indicators*/}

                                            {/*Slides*/}
                                            <div className="carousel-inner" role="listbox">
                                                {/*First slide*/}
                                                <div className="carousel-item">
                                                    {/*Mask color*/}
                                                    <div className="view">
                                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(126).jpg" className="img-fluid" alt="" />
                                                        <a href="#!">
                                                            <div className="mask flex-center rgba-stylish-strong waves-effect waves-light"></div>
                                                        </a>
                                                    </div>
                                                    {/*Caption*/}
                                                    <div className="carousel-caption">
                                                        <div className="animated fadeInDown">
                                                            <h4 className="h4-responsive">
                                                                <a href="#!" className="white-text font-weight-bold">Your Location</a>
                                                            </h4>
                                                            <p>
                                                                <a href="#!" className="white-text">Add you location</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/*Caption*/}
                                                </div>
                                                {/*First slide*/}

                                                {/*Second slide*/}
                                                <div className="carousel-item active">
                                                    {/*Mask color*/}
                                                    <div className="view">
                                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(128).jpg" className="img-fluid" alt="" />
                                                        <a href="#!">
                                                            <div className="mask flex-center rgba-black-light waves-effect waves-light"></div>
                                                        </a>
                                                    </div>
                                                    {/*Caption*/}
                                                    <div className="carousel-caption">
                                                        <div className="animated fadeInDown">
                                                            <h4 className="h4-responsive">
                                                                <a href="#!" className="white-text font-weight-bold">New Location</a>
                                                            </h4>
                                                            <p>
                                                                <a href="#!" className="white-text">Add Your New Location</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/*Caption*/}
                                                </div>
                                                {/*Second slide*/}

                                                {/*Third slide*/}
                                                <div className="carousel-item">
                                                    {/*Mask color*/}
                                                    <div className="view">
                                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(133).jpg" className="img-fluid" alt="" />
                                                        <a href="#!">
                                                            <div className="mask flex-center rgba-black-light waves-effect waves-light"></div>
                                                        </a>
                                                    </div>
                                                    {/*Caption*/}
                                                    <div className="carousel-caption">
                                                        <div className="animated fadeInDown">
                                                            <h4 className="h4-responsive">
                                                                <a href="#!" className="white-text font-weight-bold">News Location</a>
                                                            </h4>
                                                            <p>
                                                                <a href="#!" className="white-text">Your New Location</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/*Caption*/}
                                                </div>
                                                {/*Third slide*/}
                                            </div>
                                            {/*Slides*/}

                                            {/*Controls*/}
                                            <a className="carousel-control-prev" href="#carousel-example-4" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carousel-example-4" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                            {/*.Controls*/}
                                        </div>
                                        {/*Carousel Wrapper*/}

                                    </div>
                                    {/*Grid column*/}

                                </div>
                                {/*Grid row*/}

                            </section>
                            {/*Featured posts*/}

                        </div>
                        {/*Sidebar*/}

                    </div>
                    {/*Blog*/}

                </div>

            </div>

        </section>
        {/*Blog section*/}



        {/*Latest posts*/}
        <section>
            <div className="container-fluid white mb-0 pb-0">
                <hr className="mt-0"/>
                <div className="container">
                    {/*Grid row*/}
                    <div className="row">

                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-12">
                            <h6 className="font-weight-bold mt-5 mb-3">ABOUT</h6>
                            <hr className="mb-5" />
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img (37).jpg" alt="sample image" className="img-fluid z-depth-1" />
                            <p className="mt-4 mb-5">Always be positive. </p>
                        </div>
                        {/*Grid column*/}

                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-6">
                            <h6 className="font-weight-bold mt-5 mb-3">LATESTS APPLICATIONS</h6>
                            <hr className="mb-5" />
                            {/*Grid row*/}
                            <div className="row mt-4">

                                {/*Grid column*/}
                                <div className="col-4">

                                    {/*Image*/}
                                    <div className="view overlay z-depth-1 mb-3">
                                        <img src="https://mdbootstrap.com/img/Photos/Others/photo12.jpg" className="img-fluid" alt="Post" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>

                                </div>
                                {/*Grid column*/}

                                {/*Second column*/}
                                <div className="col-8 mb-1">

                                    {/*Post data*/}
                                    <div className="">
                                        <p className="mb-1">
                                            <a href="#!" className="text-hover font-weight-bold">NEW JOBS POSITIONS</a>
                                        </p>
                                        <p className="font-small grey-text">
                                            <em>April 07, 2020</em>
                                        </p>
                                    </div>

                                </div>
                                {/*Second column*/}

                            </div>
                            {/*Grid row*/}

                            {/*Grid row*/}
                            <div className="row">

                                {/*Grid column*/}
                                <div className="col-4">

                                    {/*Image*/}
                                    <div className="view overlay z-depth-1 mb-3">
                                        <img src="https://mdbootstrap.com/img/Photos/Others/photo11.jpg" className="img-fluid" alt="Post" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>

                                </div>
                                {/*Grid column*/}

                                {/*Second column*/}
                                <div className="col-7 mb-1">

                                    {/*Post data*/}
                                    <div className="">
                                        <p className="mb-1">
                                            <a href="#!" className="text-hover font-weight-bold">ALREADY APPLIED POSITIONS</a>
                                        </p>
                                        <p className="font-small grey-text">
                                            <em>April 7, 2020</em>
                                        </p>

                                    </div>

                                </div>
                                {/*Second column*/}

                            </div>
                            {/*Grid row*/}

                            {/*Grid row*/}
                            <div className="row">

                                {/*Grid column*/}
                                <div className="col-4">

                                    {/*Image*/}
                                    <div className="view overlay z-depth-1 mb-3">
                                        <img src="https://mdbootstrap.com/img/Photos/Others/photo15.jpg" className="img-fluid" alt="Post" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>

                                </div>
                                {/*Grid column*/}

                                {/*Second column*/}
                                <div className="col-7 mb-1">

                                    {/*Post data*/}
                                    <div className="">
                                        <p className="mb-1">
                                            <a href="#!" className="text-hover font-weight-bold">APPLIED HERE</a>
                                        </p>
                                        <p className="font-small grey-text">
                                            <em>April 07, 2020</em>
                                        </p>
                                    </div>

                                </div>
                                {/*Second column*/}

                            </div>
                            {/*Grid row*/}

                        </div>
                        {/*Grid column*/}

                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-6">
                            <h6 className="font-weight-bold mt-5 mb-3">YOUR APPLICATION</h6>
                            <hr className="mb-5" />

                            {/*Grid row*/}
                            <div className="row mt-4">

                                {/*Grid column*/}
                                <div className="col-4">

                                    {/*Image*/}
                                    <div className="view overlay z-depth-1 mb-3">
                                        <img src="https://mdbootstrap.com/img/Photos/Others/photo1.jpg" className="img-fluid" alt="Post" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>

                                </div>
                                {/*Grid column*/}

                                {/*Second column*/}
                                <div className="col-8 mb-1">

                                    {/*Post data*/}
                                    <div className="">
                                        <p className="mb-1">
                                            <a href="#!" className="text-hover font-weight-bold">OLD APPLICATION</a>
                                        </p>
                                        <p className="font-small grey-text">
                                            <em>April 7, 2020</em>
                                        </p>
                                    </div>

                                </div>
                                {/*Second column*/}

                            </div>
                            {/*Grid row*/}

                            {/*Grid row*/}
                            <div className="row">

                                {/*Grid column*/}
                                <div className="col-4">

                                    {/*Image*/}
                                    <div className="view overlay z-depth-1 mb-3">
                                        <img src="https://mdbootstrap.com/img/Photos/Others/photo9.jpg" className="img-fluid" alt="Post" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>

                                </div>
                                {/*Grid column*/}

                                {/*Second column*/}
                                <div className="col-7 mb-1">

                                    {/*Post data*/}
                                    <div className="">
                                        <p className="mb-1">
                                            <a href="#!" className="text-hover font-weight-bold">MONTHLY SALARY</a>
                                        </p>
                                        <p className="font-small grey-text">
                                            <em>April 7, 2020</em>
                                        </p>
                                    </div>

                                </div>
                                {/*Second column*/}

                            </div>
                            {/*Grid row*/}

                            {/*Grid row*/}
                            <div className="row">

                                {/*Grid column*/}
                                <div className="col-4">

                                    {/*Image*/}
                                    <div className="view overlay z-depth-1 mb-3">
                                        <img src="https://mdbootstrap.com/img/Photos/Others/photo4.jpg" className="img-fluid" alt="Post" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>

                                </div>
                                {/*Grid column*/}

                                {/*Second column*/}
                                <div className="col-7 mb-1">

                                    {/*Post data*/}
                                    <div className="">
                                        <p className="mb-1">
                                            <a href="#!" className="text-hover font-weight-bold">OLD JOBS</a>
                                        </p>
                                        <p className="font-small grey-text">
                                            <em>April 7, 2020</em>
                                        </p>
                                    </div>

                                </div>
                                {/*Second column*/}

                            </div>
                            {/*Grid row*/}

                        </div>
                        {/*Grid column*/}

                    </div>
                    {/*Grid row*/}

                </div>
            </div>

        </section>
        {/*/Latest posts*/}
</div>
    </main>
    {/*Main layout*/}

<Footer/>

                </Router>
            </div>
        );
    }
}




export default Blog;
