import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (

                            <section className="section extra-margins pb-3 text-center text-lg-left">

                                {/*Grid row*/}
                                <div className="row mb-4">

                                    {/*Grid column*/}
                                    <div className="col-md-12">
                                        {/*Card*/}
                                        <div className="card">

                                            {/*Card image*/}
                                            <div className="view overlay">
                                                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg" className="card-img-top" alt="" />
                                                <a>
                                                    <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                                </a>
                                            </div>
                                            {/*/.Card image*/}

                                            {/*Card content*/}
                                            <div className="card-body mx-4">
                                                {/*Title*/}
                                                <h4 className="card-title">
                                                    <strong>Lorem ipsum dolor sit amet</strong>
                                                </h4>
                                         <hr></hr>
                                                {/*Text*/}
                                                <p className="dark-grey-text mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                    </p><p className="dark-grey-text mb-4"> Disrupt vero ea id fugiat, lo-fi lomo post-ironic irony kitsch Banksy.
                                                        Tumblr kale stumptown beer elit seitan tote bag Banksy, elit small
                                                        batch fregan sed.
                                                    </p>
                                                <p></p>
                                                <p className="font-small font-weight-bold blue-grey-text mb-1">
                                                    <i className="far fa-clock-o"></i> April 05, 2020</p>
                                                <p className="font-small dark-grey-text mb-0 font-weight-bold">SAMINTHA SMITH</p>
                                                <p className="text-right mb-0 text-uppercase dark-grey-text font-weight-bold">
                                                    <a>read more
                                                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                                                    </a>
                                                </p>
                                            </div>
                                            {/*/.Card content*/}

                                        </div>
                                        {/*/.Card*/}

                                    </div>
                                    {/*Grid column*/}

                                </div>
                                {/*/Grid row*/}


                            </section>



        );
    }
}



export default Post;
